import { IPath2D, IRenderingContext, ICanvas } from "../../src/dom-interaces";

type MockRenderInstruction = {
    type: 'stroke' | 'fill', path: IPath2D, strokeStyle: string, fillStyle: string
} | {
    type: 'clearRect', x: number, y: number, height: number, width: number
};

export default class MockRenderingContext implements IRenderingContext {
    canvas: ICanvas
    instructions: MockRenderInstruction[] = [];
    strokeStyle = 'mockDefault';
    fillStyle = 'mockDefault';

    constructor(canvas: ICanvas) {
        this.canvas = canvas;
    }

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

    clearRect(x: number, y: number, width: number, height: number): void {
        this.instructions.push({
            type: 'clearRect',
            x, y, width, height
        });
    }
}