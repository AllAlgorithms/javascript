"use strict";

/**known Collatz infinite loops*/
const CYCLES = new Set([
    1, 0, -1, -5, -17, NaN, Infinity, -Infinity
]);

/**
 * Collatz conjecture calculator.
 * returns an array containing the Hailstone sequence of `n`.
 * @param {number} n "seed"
*/
const collatz = n => {
    const sequence = [];

    while ( !CYCLES.has(n) ) {
        sequence.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    sequence.push(n);
    return sequence;
}

[11, 27, 51, -7].forEach(n => console.log(
    `Hailstone sequence of ${n}`,
    collatz(n)
));