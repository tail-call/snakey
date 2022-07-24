export interface IElement {
    tagName: string
}

export interface IPath2D {
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    closePath(x: number, y: number): void;
}

export interface IRenderingContext {
    stroke(path: IPath2D): void
}

export interface ICanvas extends IElement {
    width: number
    height: number

    getContext(type: '2d'): IRenderingContext
}

export interface IDocument {
    createElement(tagName: string): IElement
}
