// JavaScript implementation of prime number checking O(sqrt(n))
//
// Author: Tevfik Kadan

function isPrimeFast(val) {
    if (val <= 1)
        return false;

    if (val % 2 == 0)
        return val == 2;

    if (val % 3 == 0)
        return val == 3;

    if (val % 5 == 0)
        return val == 5;

    if (val % 7 == 0)
        return val == 7;

    let sqrtVal = parseInt(Math.sqrt(val));

    for (let i = 11; i <= sqrtVal; i += 2)
        if (val % i == 0)
            return false;

    return true;
}

// Test

console.log("The number 1000003 is prime:");
console.log(isPrimeFast(1000003));


console.log("The number 16 is prime:");
console.log(isPrimeFast(16));
