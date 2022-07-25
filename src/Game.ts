import { IDisplay } from "./Display";
import { ICanvas, IDocument } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";

export class Game {
    document: IDocument;
    pathFactory: IPathFactory;
    display: IDisplay;

    constructor(options: {
        document: IDocument,
        pathFactory: IPathFactory,
        display: IDisplay,
    }) {
        this.document = options.document;
        this.pathFactory = options.pathFactory;
        this.display = options.display;
    }

    drawWorld() {
        this.display.drawGrid({
            x: 0, y: 0, cellHeight: 40, cellWidth: 40, columns: 8, rows: 10
        });

        this.display.drawSnakeBlock({
            x: 3, y: 5, width: 40, height: 40
        });
    }
}