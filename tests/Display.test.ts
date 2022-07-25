import { expect, should } from "chai";
import Display from "../src/Display";
import MockRenderingContext from "./mock/MockRenderingContext";
import MockPath from './mock/MockPath';
import MockPathFactory from "./mock/MockPathFactory";

export default function displayTest() {
    // Drawing grid
    {
        const context = new MockRenderingContext();
        const display = new Display();

        display.drawGrid(context, new MockPathFactory(), {
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
        const context = new MockRenderingContext();
        const display = new Display();

        display.drawSnakeBlock(context, new MockPathFactory(), {
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
}