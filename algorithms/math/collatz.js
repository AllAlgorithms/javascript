"use strict";

/**known Collatz infinite loops*/
const CYCLES = new Set([
    1, 0, -1, -5, -17, NaN, Infinity, -Infinity
]);

/**
 * Collatz conjecture
 * @param {number} n
*/
const collatz = n => {
    const numbers = [];

    while ( !CYCLES.has(n) ) {
        numbers.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    numbers.push(n);
    return numbers;
}

console.log(
    'Hailstone sequence of 11',
    collatz(11)
)

console.log(
    'Hailstone sequence of 27',
    collatz(27)
)

console.log(
    'Hailstone sequence of 51',
    collatz(51)
)
