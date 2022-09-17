"use strict";

/** @typedef {number|bigint} numeric */

/** @param {numeric} x */
const abs = x => x < 0 ? -x : x;

/**
 * GCD - greatest common divisor or HCF - highest common factor.
 * Using the Euclidean algorithm (not to be confused with Euclid's algo, which does subtraction).
 *
 * Argument order doesn't matter.
 * `return`s correct results even for non-integers (sometimes, because of rounding errors).
 * This fn is 2-adic, the variadic implementation is left as an exercise to the reader.
 * @param {numeric} a
 * @param {numeric} b
*/
const gcd = (a, b) => {
    while (b != 0)
        [a, b] = [b, a % b];
    return abs(a)
}

const tuples = [[6, 9], [6, 12], [-12, -18], [7, 14], [7, 13], [1/2, 2]];

for (const [a, b] of tuples)
    console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);
