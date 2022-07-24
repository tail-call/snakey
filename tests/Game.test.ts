import { Game } from "../src/Game"; 
import { MockDocument } from "./mock/MockDocument";
import { expect } from "chai";
import MockPathFactory from "./mock/MockPathFactory";

export default function gameTest() {
    const app = new Game({
        document: MockDocument,
        pathFactory: new MockPathFactory(),
    });

    // Setting proper width, height, tag name
    {
        const canvas = app.makeCanvas(123, 456);
        expect(canvas.tagName).to.be.equal('CANVAS');
        expect(canvas.width).to.be.equal(123);
        expect(canvas.height).to.be.equal(456);
    }
}