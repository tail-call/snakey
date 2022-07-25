import { expect } from "chai";
import { ISnakeDelegate, Snake } from "../src/Snake";

function makeDelegate(): ISnakeDelegate {
    return new class {
        didIntersect = false;

        snakeDidIntersectWithSelf() {
            this.didIntersect = true;
        }
    }
}

export default function snakeTest() {
    // Test construction
    {
        const delegate = makeDelegate();
        const snake = new Snake(delegate, 5, { x: 0, y: 0 }, "east");

        expect(snake.blocks).to.be.lengthOf(5);
        expect(snake.blocks[0]).to.include({ x: 0, y: 0 });
        expect(snake.movementDirection).to.be.equal("east");
    }

    // Test movement east
    {
        const delegate = makeDelegate();
        const snake = new Snake(delegate, 5, { x: 0, y: 0 }, "east");

        for (let i = 0; i < 5; i++) {
            snake.move();
        }

        expect(snake.blocks).to.include.all.members([
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
        ])
    }

    // Test movement west
    {
        const delegate = makeDelegate();
        const snake = new Snake(delegate, 5, { x: 0, y: 0 }, "west");

        for (let i = 0; i < 5; i++) {
            snake.move();
        }

        expect(snake.blocks).to.include.all.members([
            { x:  0, y: 0 },
            { x: -1, y: 0 },
            { x: -2, y: 0 },
            { x: -3, y: 0 },
            { x: -4, y: 0 },
        ])
    }

    // Test movement south
    {
        const delegate = makeDelegate();
        const snake = new Snake(delegate, 5, { x: 0, y: 0 }, "south");

        for (let i = 0; i < 5; i++) {
            snake.move();
        }

        expect(snake.blocks).to.include.all.members([
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
        ])
    }

    // Test movement north
    {
        const delegate = makeDelegate();
        const snake = new Snake(delegate, 5, { x: 0, y: 0 }, "north");

        for (let i = 0; i < 5; i++) {
            snake.move();
        }

        expect(snake.blocks).to.include.all.members([
            { x: 0, y:  0 },
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
            { x: 0, y: -4 },
        ])
    }
}