import { ICanvas, IRenderingContext } from "../../src/dom-interaces";
import MockRenderingContext from "./MockRenderingContext";

export default class MockCanvas implements ICanvas {
    private context = new MockRenderingContext();

    width = -1;
    height = -1;
    tagName = 'CANVAS';


    getContext(type: '2d'): IRenderingContext {
        return this.context;
    }
}