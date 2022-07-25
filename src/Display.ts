import { IRenderingContext } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";

export interface IDisplay {
    drawGrid(
        options: {
            x: number,
            y: number,
            cellWidth: number,
            cellHeight: number,
            columns: number,
            rows: number,
        }
    ): void
    
    drawSnakeBlock(
        options: { x: number, y: number, width: number, height: number }
    ): void
}

export default class Display {
    context: IRenderingContext
    pathFactory: IPathFactory

    constructor(context: IRenderingContext, pathFactory: IPathFactory) {
        this.context = context;
        this.pathFactory = pathFactory;
    }

    drawGrid(
        options: {
            x: number,
            y: number,
            cellWidth: number,
            cellHeight: number,
            columns: number,
            rows: number,
        }
    ) {
        const path = this.pathFactory.makePath();

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

        this.context.stroke(path);
    }

    drawSnakeBlock(
        options: { x: number, y: number, width: number, height: number }
    ) {
        const path = this.pathFactory.makePath();

        for (const padding of [0, 4]) {
            path.moveTo(
                options.x * options.width + padding,
                options.y * options.height + padding
            );
            path.lineTo(
                options.x * options.width + options.width - padding,
                options.y * options.height + padding
            );
            path.lineTo(
                options.x * options.width + options.width - padding,
                options.y * options.height + options.height - padding
            );
            path.lineTo(
                options.x * options.width + padding,
                options.y * options.height + options.height - padding
            );
            path.closePath();
        }

        this.context.fillStyle = '#008800';
        this.context.fill(path, 'evenodd');
    }
}