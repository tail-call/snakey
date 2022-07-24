import { IDocument, IElement } from "../../src/dom-interaces";
import MockCanvas from "./MockCanvas";

export const MockDocument: IDocument = {
    createElement(tagName: String): IElement {
        if (tagName === 'canvas') {
            return new MockCanvas();
        }

        return {
            tagName: tagName.toUpperCase()
        };
    },
};