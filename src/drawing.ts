import { IRenderingContext } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";

export function drawGrid(
    context: IRenderingContext,
    pathFactory: IPathFactory,
    options: {
        x: number,
        y: number,
        cellWidth: number,
        cellHeight: number,
        columns: number,
        rows: number,
    }
) {
    const path = pathFactory.makePath();

    for (let column = 0; column <= options.columns; column++) {
        const x = options.x + column * options.cellWidth; 
        path.moveTo(
            x, 
            options.y
        );
        path.lineTo(
            x,
            options.y + options.cellHeight * options.rows
        );
    }

    for (let row = 0; row <= options.rows; row++) {
        const y = options.y + row * options.cellHeight; 
        path.moveTo(
            options.x,
            y
        );
        path.lineTo(
            options.x + options.cellWidth * options.columns,
            y
        );
    }

    context.stroke(path);
}
