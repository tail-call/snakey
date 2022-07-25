import { ICanvas, IRenderingContext } from "../../src/dom-interaces";
import MockRenderingContext from "./MockRenderingContext";

export default class MockCanvas implements ICanvas {
    width = -1;
    height = -1;
    tagName = 'CANVAS';

    getContext(type: '2d'): IRenderingContext {
        return this.getMockContext();
    }

    getMockContext(): MockRenderingContext {
        return new MockRenderingContext(this);
    }
}