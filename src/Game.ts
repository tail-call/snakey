import { ICanvas, IDocument, IRenderingContext } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";

export class Game {
    document: IDocument;
    pathFactory: IPathFactory;

    constructor(options: {
        document: IDocument,
        pathFactory: IPathFactory
    }) {
        this.document = options.document;
        this.pathFactory = options.pathFactory;
    }

    makeCanvas(width: number, height: number): ICanvas {
        const canvas = this.document.createElement('canvas') as ICanvas;
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    drawGrid(
        context: IRenderingContext,
        options: {
            x: number,
            y: number,
            cellWidth: number,
            cellHeight: number,
            columns: number,
            rows: number,
        }
    ) {
        const path = this.pathFactory.makePath();

        for (let column = 0; column <= options.columns; column++) {
            const x = options.x + column * options.cellWidth; 
            path.moveTo(
                x, 
                options.y
            );
            path.lineTo(
                x,
                options.y + options.cellHeight * options.rows
            );
        }

        for (let row = 0; row <= options.rows; row++) {
            const y = options.y + row * options.cellHeight; 
            path.moveTo(
                options.x,
                y
            );
            path.lineTo(
                options.x + options.cellWidth * options.columns,
                y
            );
        }

        context.stroke(path);
    }
}
