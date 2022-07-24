import { App } from "../src/App"; 
import { MockDocument } from "./mock/MockDocument";
import { expect } from "chai";

export default function appTest() {
    const app = new App(MockDocument);

    const canvas = app.makeCanvas(123, 456);

    expect(canvas.tagName).to.be.equal('CANVAS');
    expect(canvas.width).to.be.equal(123);
    expect(canvas.height).to.be.equal(456);
}