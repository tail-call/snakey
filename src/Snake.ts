type Point = { x: number, y: number };
type Direction = "north" | "south" | "east" | "west";

export interface ISnakeDelegate {
    snakeDidIntersectWithSelf(snake: ISnake, intersectionPoint: Point): void
}

export interface ISnake {
    delegate: ISnakeDelegate
    blocks: Point[]
    movementDirection: Direction

    move(): void
}

export class Snake implements ISnake {
    delegate: ISnakeDelegate;
    blocks: Point[];
    movementDirection: Direction;

    constructor(
        delegate: ISnakeDelegate,
        length: number,
        position: Point,
        initialDirection: Direction,
    ) {
        this.delegate = delegate;
        this.blocks = new Array(length).fill(position);
        this.movementDirection = initialDirection;
    }

    move(): void {
    }
}