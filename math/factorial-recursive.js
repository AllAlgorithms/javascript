// JavaScript implementation of recursive factorial

// Author: Jay McDoniel

function factorial(number) {
  let retNum = number ? number : 1;
  if (number >= 2) {
    retNum *= factorial(number - 1);
  }
  return retNum;
}

for (let i = 0; i < 20; i++) {
  console.log(factorial(i));
}