"use strict";

/** @typedef {(number|bigint)} numeric */

/** @param {numeric} x */
const abs = x => x < 0 ? -x : x;

/**
 * GCD - greatest common divisor or HCF - highest common factor.
 * Using the Euclidean algorithm (not to be confused with Euclid's algo).
 * @param {numeric} a
 * @param {numeric} b
 * returns correct results even for non-integers (sometimes)
*/
const gcd = (a, b) => {
  while (b != 0)
    [a, b] = [b, a % b];
  return abs(a)
}

const gcdList = [[6, 9], [6, 12], [12, 18], [7, 14], [7, 13]];

for (const [small, large] of gcdList)
  console.log(`GCD for ${small} and ${large} is ${gcd(small, large)}`);
