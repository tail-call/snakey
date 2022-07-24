import { IPath2D, IRenderingContext } from "../../src/dom-interaces";

type MockRenderInstruction = {
    type: 'stroke' | 'fill', path: IPath2D, strokeStyle: string, fillStyle: string
};

export default class MockRenderingContext implements IRenderingContext {
    instructions: MockRenderInstruction[] = [];
    strokeStyle = 'mockDefault';
    fillStyle = 'mockDefault';

    stroke(path: IPath2D): void {
        this.instructions.push({
            type: 'stroke',
            path,
            strokeStyle: this.strokeStyle,
            fillStyle: this.fillStyle
        });
    }

    fill(path: IPath2D): void {
        this.instructions.push({
            type: 'fill',
            path,
            strokeStyle: this.strokeStyle,
            fillStyle: this.fillStyle
        });
    }
}