// JavaScript implementation of Factorial

// Author: Niezwan Abdul Wahid

function factorial(number) {
  let val = 1;

  for (let i = 2; i <= number; i += 1) {
    val *= i;
  }

  return val;
}

//factorial(13) === 6 227 020 800