import { IDisplay } from "../../src/Display";
import { ISnake } from "../../src/Snake";

type DisplayedItem = "clear" | "grid" | ISnake;

export default class MockDisplay implements IDisplay {
    displayedItems: DisplayedItem[] = []
    xOffset = 0
    yOffset = 0

    clear(): void {
        this.displayedItems = ["clear"];
    }

    drawGrid(options: {
        x: number;
        y: number;
        cellWidth: number;
        cellHeight: number;
        columns: number;
        rows: number;
    }): void {
        this.displayedItems.push("grid");
    }

    drawSnake(snake: ISnake): void {
        this.displayedItems.push(snake);
    }

    pan(deltaX: number, deltaY: number): void {
        this.xOffset += deltaX;
        this.yOffset += deltaY;
    }
}