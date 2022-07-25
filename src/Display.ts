import { IRenderingContext } from "./dom-interaces";
import { IPathFactory } from "./PathFactory";
import { ISnake } from "./Snake";

export interface IDisplay {
    clear(): void
    drawGrid(
        options: {
            x: number,
            y: number,
            columns: number,
            rows: number,
        }
    ): void
    drawSnake(snake: ISnake): void
    pan(deltaX: number, deltaY: number): void
}

type DisplayDimensions = {
    blockWidth: number,
    blockHeight: number,
};

type Viewport = {
    xOffset: number,
    yOffset: number,
};

export default class Display implements IDisplay {
    context: IRenderingContext
    pathFactory: IPathFactory
    dimensions: DisplayDimensions
    viewport: Viewport;

    constructor(
        context: IRenderingContext,
        pathFactory: IPathFactory,
        dimensions: DisplayDimensions,
    ) {
        this.context = context;
        this.pathFactory = pathFactory;
        this.dimensions = dimensions;

        this.viewport = {
            xOffset: 0,
            yOffset: 0,
        };
    }

    clear(): void {
        this.context.clearRect(
            0, 0,
            this.context.canvas.width, this.context.canvas.height
        );
    }

    drawGrid(
        options: {
            x: number,
            y: number,
            columns: number,
            rows: number,
        }
    ) {
        const path = this.pathFactory.makePath();

        for (let column = 0; column <= options.columns; column++) {
            const x = options.x + column * this.dimensions.blockWidth;
            path.moveTo(
                x, 
                options.y
            );
            path.lineTo(
                x,
                options.y + this.dimensions.blockHeight * options.rows
            );
        }

        for (let row = 0; row <= options.rows; row++) {
            const y = options.y + row * this.dimensions.blockHeight;
            path.moveTo(
                options.x,
                y
            );
            path.lineTo(
                options.x + this.dimensions.blockWidth * options.columns,
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

    drawSnake(snake: ISnake): void {
        for (const block of snake.blocks) {
            this.drawSnakeBlock({
                ...block,
                width: this.dimensions.blockWidth,
                height: this.dimensions.blockHeight
            });
        }
    }

    pan(deltaX: number, deltaY: number): void {
        this.viewport.xOffset += deltaX;
        this.viewport.yOffset += deltaY;
    }
}