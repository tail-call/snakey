import { Game } from "../src/Game"; 
import { MockDocument } from "./mock/MockDocument";
import { expect } from "chai";
import MockPathFactory from "./mock/MockPathFactory";
import MockDisplay from "./mock/MockDisplay";

export default function gameTest() {
    const display = new MockDisplay();

    const game = new Game({
        document: MockDocument,
        pathFactory: new MockPathFactory(),
        display,
    });

    // Drawing world
    {
        game.drawWorld();
        expect(display.displayedItems).to.have.lengthOf(2);
        expect(display.displayedItems).to.contain.all.members(["grid", game.snakes[0]]);
    }
}