import { ICanvas, IDocument } from "./dom-interaces";
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
}