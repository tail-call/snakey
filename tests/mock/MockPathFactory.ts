import { IPath2D } from "../../src/dom-interaces";
import { IPathFactory } from "../../src/PathFactory";
import MockPath from "./MockPath";

export default class MockPathFactory implements IPathFactory {
    makePath(): IPath2D {    
        return new MockPath();
    }
}