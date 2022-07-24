import { IDocument, IElement } from "../../src/dom-interaces";

export const MockDocument: IDocument = {
    createElement(tagName: String): IElement {
        return {
            tagName: tagName.toUpperCase()
        };
    },
};