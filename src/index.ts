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

let isPanning = false
let lastPosition = { x: 0, y: 0 };

(canvas as HTMLCanvasElement).addEventListener('mousedown', (event: MouseEvent) => {
    isPanning = true;
    lastPosition = { x: event.clientX, y: event.clientY };

    return true;
});

document.addEventListener('mouseup', (event: MouseEvent) => {
    isPanning = false;
    return true;
});

document.addEventListener('mousemove', (event: MouseEvent) => {
    if (!isPanning) return true;

    const deltaX = event.clientX - lastPosition.x;
    const deltaY = event.clientY - lastPosition.y;

    lastPosition = { x: event.clientX, y: event.clientY };

    display.pan(deltaX, deltaY);
});

setInterval(() => {
    game.step();
}, 200);

display.drawWorld(game.snakes);
(function animate() {
    display.drawWorld(game.snakes);
    requestAnimationFrame(animate);
})();