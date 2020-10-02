// JavaScript implementation of prime number checking
//
// Author: Nikolas Huebecker

function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }else {
      divisor++;
    }
  }
  return true;
}

// Test

console.log("The number 137 is prime:"
console.log(isPrime(137))


console.log("The number 16 is prime:"
console.log(isPrime(16))
