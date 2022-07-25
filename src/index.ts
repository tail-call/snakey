import { Game } from "./Game";
import { PathFactory } from "./PathFactory";
import { ICanvas } from "./dom-interaces";
import Display from "./Display";

function makeCanvas(width: number, height: number): ICanvas {
    const canvas = document.createElement('canvas') as ICanvas;
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

const canvas = makeCanvas(800, 600);
document.body.appendChild(canvas as HTMLCanvasElement);
const context = canvas.getContext('2d');
const display = new Display(
    context,
    PathFactory.instance,
    { blockHeight: 40, blockWidth: 40 }
);

const game = new Game({
    document,
    pathFactory: new PathFactory(),
    display,
});

game.drawWorld();