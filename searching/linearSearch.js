/**
 *
 * @author Rashik Ansar
 *
 * @param {number[]} arr Array of numbers to search
 * @param {number} val Value to search in the given array
 * @return {number[] | -1 } return array of indices at which the given value present or -1
 */
function linearSearch(arr, val) {
  let indices = [];
  for (let i in arr) {
    if (arr[i] === val) {
      indices.push(i);
    }
  }
  if (indices.length) return indices;

  return -1;
}

let a = [1, 2, 3, 1, 1, 525, 5884, 545, 6854, 3, 1, 4];

let x = linearSearch(a, 1);
console.log(x);
let y = linearSearch(a, 545);
console.log(y);
