import { IDisplay } from "./Display";
import { IDocument } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";
import { ISnake, ISnakeDelegate, Snake } from "./Snake";

export class Game implements ISnakeDelegate {
    document: IDocument;
    pathFactory: IPathFactory;
    display: IDisplay;

    snakes: ISnake[] = [];

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

    step() {
        for (const snake of this.snakes) {
            snake.move();
        }
    }

    snakeDidIntersectWithSelf(
        snake: ISnake,
        intersectionPoint: { x: number; y: number; }
    ): void {
        // stub
    }
}