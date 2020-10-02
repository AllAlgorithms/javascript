// JavaScript implementation of nCr computation
//
// Author: Shriharsha KL

function fact(n) {
    if (n === 0)
        return 1;
    
    return n * fact(n - 1);
}

function nCr(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
}

// Test
console.log(nCr(10, 2))