import { App } from "./App";

const app = new App(document);

document.body.appendChild(
    app.makeCanvas(400, 300) as HTMLCanvasElement
);