import gameTest from './Game.test';
import drawingTest from './drawing.test';

const tests = [
    gameTest,
    drawingTest,
];

for (const test of tests) {
    try {
        test();
    } catch(e) {
        console.error(e);
    }
}