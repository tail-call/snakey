type Point = { x: number, y: number };
type Direction = "north" | "south" | "east" | "west";

export function addPoints(pointA: Point, pointB: Point): Point {
    return {
        x: pointA.x + pointB.x,
        y: pointA.y + pointB.y,
    };
}

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

    get head(): Point | undefined {
        return this.blocks[this.blocks.length - 1];
    }

    move(): void {
        const tail = this.blocks.shift();
        if (!tail) return;

        const head = this.head || tail;

        let newHead: Point;
        switch (this.movementDirection) {
        case "east":
            newHead = addPoints(head, { x: 1, y : 0 });
            break;
        case "north":
            newHead = addPoints(head, { x: 0, y : -1 });
            break;
        case "south":
            newHead = addPoints(head, { x: 0, y : 1 });
            break;
        case "west":
            newHead = addPoints(head, { x: -1, y : 0 });
            break;
        }

        this.blocks.push(newHead);
    }
}