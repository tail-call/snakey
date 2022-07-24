import { ICanvas, IDocument } from "./dom-interaces";

export class App {
    document: IDocument;

    constructor(document: IDocument) {
        this.document = document;
    }

    makeCanvas(width: number, height: number): ICanvas {
        const canvas = this.document.createElement('canvas') as ICanvas;
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
}
