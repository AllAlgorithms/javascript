/**
 * JS implementation of primality testing
 * @param {number} n
 * @author Nikolas Huebecker
*/
const isPrime = n => {
  n = Math.abs(n);

  if (!Number.isInteger(n))
    return false;

  if (n % 2 === 0)
    return n === 2;

  const rt = Math.sqrt(n);

  for (let d = 3; d <= rt; d += 2)
    if (n % d === 0)
      return false;

  return true;
}

// Test

for (const n of [137, 16, 24, 127, 11])
  console.log(`The number ${n} is prime: ${isPrime(n)}`)
