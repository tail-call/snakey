import { IDisplay } from "../../src/Display";
import { ISnake } from "../../src/Snake";

export default class MockDisplay implements IDisplay {
    displayedSnakes: ISnake[] = [];
    xOffset = 0;
    yOffset = 0;

    pan(deltaX: number, deltaY: number): void {
        this.xOffset += deltaX;
        this.yOffset += deltaY;
    }

    drawWorld(snakes: ISnake[]): void {
        this.displayedSnakes = snakes;
    }
}