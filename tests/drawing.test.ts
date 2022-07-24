import { expect } from "chai";
import { drawGrid } from "../src/drawing";
import MockRenderingContext from "./mock/MockRenderingContext";
import { PathFactory } from "../src/PathFactory";
import MockPath from './mock/MockPath';

export default function drawingTest() {
    // Drawing grid
    {
        const context = new MockRenderingContext();

        drawGrid(context, new PathFactory(), {
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
        expect(lines).to.be.equal(11 * 11);
    }
}