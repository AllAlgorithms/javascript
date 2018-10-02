// JavaScript implementation of Fibonacci item finder
//
// Author: Nikoals Huebecker

// Time Complexity O(n)

function fibonacci(n){
  var fib = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fib[i] = fib[i-1]+fib[i-2];
  }

 return fib[n];
} 

// Test

console.log("The first item of the sequence is:")
console.log(fibonacci(1))

console.log("The tweleth item of the sequence is:")
console.log(fibonacci(12))
