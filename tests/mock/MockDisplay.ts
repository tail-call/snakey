import { IDisplay } from "../../src/Display";

type DisplayedItem = "grid" | "snake";

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

    drawSnakeBlock(options: {
        x: number; y: number; width: number; height: number;
    }): void {
        this.displayedItems.push("snake");     
    }
}