import { IPath2D } from "./dom-interaces";

export interface IPathFactory {
    makePath(): IPath2D
}

export class PathFactory {
    static instance = new PathFactory();

    makePath(): IPath2D {
        return new Path2D();
    }
}