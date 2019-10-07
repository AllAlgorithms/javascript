// JavaScript implementation of to check if a number is a perfect square
//
// Author: Ayoola Akindolani

var isPerfectSquare = function(num) {
  if (num >= 0 && Math.sqrt(num) % 1 === 0) {
    console.log("Number is a perfect square.");
  } else {
    console.log("Number is not a perfect square.");
  }
};

isPerfectSquare(81);
isPerfectSquare(9);
isPerfectSquare(8);
