// GCD - greatest common divisor or HCF - highest common factor

function gcd (small, large) {
  if (small === 0) { return large } else { return gcd(large % small, small) }
}

const gcdList = [[6, 9], [6, 12], [12, 18], [7, 14], [7, 13]]

for (const set of gcdList) {
  const small = set[0]
  const large = set[1]
  console.log(`GCD for ${small} and ${large} is ${gcd(small, large)}`)
}
