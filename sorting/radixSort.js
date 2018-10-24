/**
 * Gives the number at specified digits place
 * @param {number} num
 * @param {number} place
 */
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Calculate the number of digits in a given number
 * @param {number} num
 */
function digits(num) {
  if (num !== 0) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  return 1;
}

/**
 * Find the maxDigits element in the given array
 * @param {number[]} arr
 */
function maxDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digits(arr[i]));
  }
  return max;
}

/**
 * Its default base10 digit sorting
 * @param {number[]} arr
 */
function radixSort(arr) {
  let max = maxDigits(arr);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digitsValue = getDigit(arr[j], i);
      buckets[digitsValue].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

let a = [234, 364, 12, 64, 21315, 75, 23425];
let b = radixSort(a);
console.log(b);
