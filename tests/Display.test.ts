import { expect, should } from "chai";
import Display from "../src/Display";
import MockRenderingContext from "./mock/MockRenderingContext";
import MockPath from './mock/MockPath';
import MockPathFactory from "./mock/MockPathFactory";
import { ISnakeDelegate, Snake } from "../src/Snake";

function makeDisplay(): { display: Display, context: MockRenderingContext } {
    const context = new MockRenderingContext();
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
    // Drawing grid
    {
        const { display, context } = makeDisplay();

        display.drawGrid({
            x: 0,
            y: 0,
            cellHeight: 10,
            cellWidth: 10,
            columns: 10,
            rows: 10
        });

        expect(context.instructions.length).to.be.equal(1);
        expect(context.instructions[0].type).to.be.equal('stroke');
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
}