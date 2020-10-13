function euclideanAlgorithmIterative(originalA, originalB) {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }
  return a || b;
}

var gcd = euclideanAlgorithmIterative(4, 7);

console.log(gcd);
