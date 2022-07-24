import { Game } from "./Game";
import { PathFactory } from "./PathFactory";

const app = new Game({
    document,
    pathFactory: new PathFactory(),
});

const canvas = app.makeCanvas(800, 600);
document.body.appendChild(canvas as HTMLCanvasElement);

const context = canvas.getContext('2d');
app.drawGrid(context, {
    x: 0, y: 0, cellHeight: 40, cellWidth: 40, columns: 8, rows: 10
})