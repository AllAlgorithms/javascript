// JS algorithm of Integer Reversal
// Author: Irsyad

// Sample input and output
// reverse(81) will produce 18
// reverse(-67) will produce -76
// reverse(-500) will produce -5

const reverse = integer =>
  parseInt(integer 
    .toString()
    .split("")
    .reverse()
    .join("")
  ) * Math.sign(integer);
    
// Test
console.log(reverse(4729));
console.log(reverse(-270));