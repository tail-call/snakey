import { ISnake, ISnakeDelegate } from "../../src/Snake";

export default class MockSnake implements ISnake {
    delegate: ISnakeDelegate = {
        snakeDidIntersectWithSelf() { }
    }

    blocks: { x: number; y: number; }[] = [{ x: 0, y: 0 }];

    readonly movementDirection = "north";

    move() {}
}