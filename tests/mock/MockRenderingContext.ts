import { IPath2D, IRenderingContext } from "../../src/dom-interaces";

type MockRenderInstruction = { type: 'stroke', path: IPath2D };

export default class MockRenderingContext implements IRenderingContext {
    instructions: MockRenderInstruction[] = [];

    stroke(path: IPath2D): void {
        this.instructions.push({ type: 'stroke', path });
    }
}