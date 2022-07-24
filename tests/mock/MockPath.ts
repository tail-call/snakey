import { IPath2D } from "../../src/dom-interaces";

type MockPathInstruction = {
    type: 'moveTo', x: number, y: number,
} | {
    type: 'lineTo', x: number, y: number,
} | {
    type: 'closePath'
};

export default class MockPath implements IPath2D {
    instructions: MockPathInstruction[] = [];

    moveTo(x: number, y: number): void {
        this.instructions.push({ type: 'moveTo', x, y });
    }

    lineTo(x: number, y: number): void {
        this.instructions.push({ type: 'lineTo', x, y });
    }

    closePath(x: number, y: number): void {
        this.instructions.push({ type: 'closePath' });
    }
}