import { Game } from "./Game";
import { PathFactory } from "./PathFactory";
import { drawGrid, drawSnakeBlock } from "./drawing";

const app = new Game({
    document,
    pathFactory: new PathFactory(),
});

const canvas = app.makeCanvas(800, 600);
document.body.appendChild(canvas as HTMLCanvasElement);

const context = canvas.getContext('2d');

drawGrid(context, app.pathFactory, {
    x: 0, y: 0, cellHeight: 40, cellWidth: 40, columns: 8, rows: 10
});

drawSnakeBlock(context, app.pathFactory, {
    x: 3, y: 5, width: 40, height: 40
});