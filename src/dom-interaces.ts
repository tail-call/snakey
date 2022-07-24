export interface IElement {
    tagName: string
}

export interface ICanvas extends IElement {
    width: number
    height: number
}

export interface IDocument {
    createElement(tagName: string): IElement
}
