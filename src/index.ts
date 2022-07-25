import { Game } from "./Game";
import { PathFactory } from "./PathFactory";
import Display from "./Display";

const app = new Game({
    document,
    pathFactory: new PathFactory(),
});

const canvas = app.makeCanvas(800, 600);
document.body.appendChild(canvas as HTMLCanvasElement);

const context = canvas.getContext('2d');
const display = new Display(context, PathFactory.instance);

display.drawGrid({
    x: 0, y: 0, cellHeight: 40, cellWidth: 40, columns: 8, rows: 10
});

display.drawSnakeBlock({
    x: 3, y: 5, width: 40, height: 40
});