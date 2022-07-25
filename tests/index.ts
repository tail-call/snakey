import gameTest from './Game.test';
import displayTest from './Display.test';
import snakeTest from './Snake.test';

const tests = [
    gameTest,
    displayTest,
    snakeTest,
];

for (const test of tests) {
    try {
        test();
    } catch(e) {
        console.error(e);
    }
}