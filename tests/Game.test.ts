import { Game } from "../src/Game"; 
import { MockDocument } from "./mock/MockDocument";
import { expect } from "chai";
import MockPathFactory from "./mock/MockPathFactory";
import MockDisplay from "./mock/MockDisplay";

function makeGame(): { game: Game, display: MockDisplay } {
    const display = new MockDisplay();
    const game = new Game({
        document: MockDocument,
        pathFactory: new MockPathFactory(),
        display,
    });

    return { game, display };
}

export default function gameTest() {
    // Simulating a world
    {
        const { game } = makeGame();

        game.step();
        expect(game.snakes[0].blocks).to.deep.equal([
            { x: 3, y: 5 },
            { x: 3, y: 5 },
            { x: 3, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
        ]);

        game.step();
        expect(game.snakes[0].blocks).to.deep.equal([
            { x: 3, y: 5 },
            { x: 3, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
        ]);
    }
}