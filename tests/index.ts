import gameTest from './Game.test';
import displayTest from './Display.test';

const tests = [
    gameTest,
    displayTest,
];

for (const test of tests) {
    try {
        test();
    } catch(e) {
        console.error(e);
    }
}