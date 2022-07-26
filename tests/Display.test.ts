import { assert, expect, should } from "chai";
import Display from "../src/Display";
import MockRenderingContext from "./mock/MockRenderingContext";
import MockPath from './mock/MockPath';
import MockPathFactory from "./mock/MockPathFactory";
import { ISnakeDelegate, Snake } from "../src/Snake";
import MockCanvas from "./mock/MockCanvas";
import MockSnake from "./mock/MockSnake";

function makeDisplay(): { display: Display, context: MockRenderingContext } {
    const canvas = new MockCanvas();
    canvas.width = 400;
    canvas.height = 300;
    const context = canvas.getMockContext();
    const pathFactory = new MockPathFactory();
    return {
        context,
        display: new Display(
            context,
            pathFactory,
            { blockHeight: 100, blockWidth: 100 }
        )
    };
}

export default function displayTest() {
    // Drawing world
    {
        const { display, context } = makeDisplay();

        expect(context.instructions).to.be.empty;

        const snakes = [
            new MockSnake(),
            new MockSnake(),
            new MockSnake(),
        ];

        display.drawWorld(snakes);
            
        expect(context.instructions).to.be.not.empty;
    }

    // Clearing screen
    {
        const { display, context } = makeDisplay();

        expect(context.instructions).to.be.empty;

        display.clear();
        expect(context.instructions).to.be.lengthOf(1);
        expect(context.instructions[0]).to.deep.equal({
            type: 'clearRect', x: 0, y: 0,
            width: context.canvas.width, height: context.canvas.height,
            translation: { x: 0, y: 0 }
        });
    }
 
    // Drawing grid
    gridTest: {
        const { display, context } = makeDisplay();

        display.drawGrid({
            x: 0,
            y: 0,
            columns: 10,
            rows: 10
        });


        expect(context.instructions.length).to.be.equal(1);
        expect(context.instructions[0].type).to.be.equal('stroke');

        if (context.instructions[0].type === "clearRect") {
            assert.fail("Grid shouldn't clear screen");
        }

        const lines = (context.instructions[0].path as MockPath)
            .instructions.filter(x => x.type === 'lineTo')
            .length;
        expect(lines).to.be.equal(11 + 11);
    }

    // Drawing snake head
    {
        const { context, display } = makeDisplay();

        display.drawSnakeBlock({
            x: 3, y: 4, height: 25, width: 25
        });
        
        expect(context.instructions.length).to.be.equal(1);

        if (context.instructions[0].type === "clearRect") {
            assert.fail("Snake head shouldn't clear screen");
        }

        const origin = (context.instructions[0].path as unknown as MockPath).origin;
        if (!origin) {
            throw new Error("unexpected path without origin");
        }
        expect(origin.x).to.be.equal(3 * 25);
        expect(origin.y).to.be.equal(4 * 25);

        expect(context.instructions[0].type).to.be.equal('fill');
        expect(context.instructions[0].fillStyle).to.be.equal('#008800');
    }

    // Drawing snake
    {
        const { context, display } = makeDisplay();
        
        const snakeDelegate: ISnakeDelegate = {
            snakeDidIntersectWithSelf() {}
        };

        display.drawSnake(
            new Snake(snakeDelegate, 8, { x: 434, y: 883 }, "south" )
        );

        expect(context.instructions).to.be.lengthOf(8);
    }

    // Panning
    {
        const { context, display } = makeDisplay();

        expect(display.viewport).to.deep.equal({ xOffset: 0, yOffset: 0 });

        display.pan(10, 20);
        expect(display.viewport).to.deep.equal({ xOffset: 10, yOffset: 20 });

        display.pan(-20, -40);
        expect(display.viewport).to.deep.equal({ xOffset: -10, yOffset: -20 });
    }

    // Translation
    {
        const { context, display } = makeDisplay();

        display.pan(10, 10);
        display.drawGrid({ x: 0, y: 0, columns: 1, rows: 1 });

        expect(context.instructions[0].translation)
            .to.deep.equal({ x: 10, y: 10 })

        display.clear();

        expect(context.lastInstruction?.translation)
            .to.deep.equal({ x: 0, y: 0 })
    }
}