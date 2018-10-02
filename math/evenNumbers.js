// Check For Even Numbers
// Author: Abejide Femi

function evenNumber(arr) {
  return arr.filter(a => a % 2 === 0);
}
console.log([1,2,5,6,8,12]) // returns [2,6,8,12]