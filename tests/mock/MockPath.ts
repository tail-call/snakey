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

    get origin(): { x: number, y: number } | null {
        const firstInstruction = this.instructions[0];

        if (!firstInstruction) {
            return null;
        }

        if (firstInstruction.type === 'closePath') {
            return null;
        }

        return {
            x: firstInstruction.x,
            y: firstInstruction.y
        }
    }

    moveTo(x: number, y: number): void {
        this.instructions.push({ type: 'moveTo', x, y });
    }

    lineTo(x: number, y: number): void {
        this.instructions.push({ type: 'lineTo', x, y });
    }

    closePath(): void {
        this.instructions.push({ type: 'closePath' });
    }
}