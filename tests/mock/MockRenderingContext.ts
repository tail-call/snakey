import { IPath2D, IRenderingContext, ICanvas } from "../../src/dom-interaces";

type MockRenderInstruction = {
    type: 'stroke' | 'fill', path: IPath2D, strokeStyle: string, fillStyle: string, translation: { x: number, y: number }
} | {
    type: 'clearRect', x: number, y: number, height: number, width: number, translation: { x: number, y: number }
};

export default class MockRenderingContext implements IRenderingContext {
    canvas: ICanvas
    instructions: MockRenderInstruction[] = [];
    strokeStyle = 'mockDefault';
    fillStyle = 'mockDefault';

    translation = { x: 0, y: 0 };

    constructor(canvas: ICanvas) {
        this.canvas = canvas;
    }

    get lastInstruction(): MockRenderInstruction | undefined {
        return this.instructions[this.instructions.length - 1];
    }

    stroke(path: IPath2D): void {
        this.instructions.push({
            type: 'stroke',
            path,
            strokeStyle: this.strokeStyle,
            fillStyle: this.fillStyle,
            translation: this.translation
        });
    }

    fill(path: IPath2D): void {
        this.instructions.push({
            type: 'fill',
            path,
            strokeStyle: this.strokeStyle,
            fillStyle: this.fillStyle,
            translation: this.translation
        });
    }

    clearRect(x: number, y: number, width: number, height: number): void {
        this.instructions.push({
            type: 'clearRect',
            x, y, width, height,
            translation: this.translation
        });
    }

    translate(x: number, y: number): void {
        this.translation = {
            x: this.translation.x + x,
            y: this.translation.y + y
        }; 
    }

    resetTransform(): void {
        this.translation = {
            x: 0, y: 0
        };
    }
}