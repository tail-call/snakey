import { sum } from "../src/sum";
import { expect } from "chai";

export default function sumTest() {
    expect(sum(2, 2)).to.be.equal(5);
}