import { IDisplay } from "./Display";
import { IDocument } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";
import { ISnake, ISnakeDelegate, Snake } from "./Snake";

export class Game implements ISnakeDelegate {
    document: IDocument;
    pathFactory: IPathFactory;
    display: IDisplay;

    snakes: Snake[] = [];

    constructor(options: {
        document: IDocument,
        pathFactory: IPathFactory,
        display: IDisplay,
    }) {
        this.document = options.document;
        this.pathFactory = options.pathFactory;
        this.display = options.display;

        this.snakes.push(new Snake(this, 5, { x: 3, y: 5 }, "east"));
    }

    drawWorld() {
        this.display.drawGrid({
            x: 0, y: 0, cellHeight: 40, cellWidth: 40, columns: 8, rows: 10
        });

        for (const snake of this.snakes) {
            this.display.drawSnake(snake);
        }
    }

    snakeDidIntersectWithSelf(
        snake: ISnake,
        intersectionPoint: { x: number; y: number; }
    ): void {
        // stub
    }
}