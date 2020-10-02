/ JavaScript recursive implementation of Fibonacci item finder
//
// Author: Nikoals Huebecker

// Time Complexity O(2^n)

function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}

// Test

console.log("The first item of the sequence is:")
console.log(fibonacci(1))

console.log("The tweleth item of the sequence is:")
console.log(fibonacci(12))
