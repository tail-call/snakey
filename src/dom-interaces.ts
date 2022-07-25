export interface IElement {
    tagName: string
}

export interface IPath2D {
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    closePath(): void;
}

export interface IRenderingContext {
    strokeStyle: string
    fillStyle: string
    readonly canvas: ICanvas
    stroke(path: IPath2D): void
    fill(path: IPath2D, fillRule: 'evenodd' | 'nonzero'): void
    clearRect(x: number, y: number, width: number, height: number): void
}

export interface ICanvas extends IElement {
    width: number
    height: number

    getContext(type: '2d'): IRenderingContext
}

export interface IDocument {
    createElement(tagName: string): IElement
}
