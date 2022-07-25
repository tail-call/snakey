import { IDisplay } from "../../src/Display";
import { ISnake } from "../../src/Snake";

type DisplayedItem = "grid" | ISnake;

export default class MockDisplay implements IDisplay {
    displayedItems: DisplayedItem[] = []

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
}