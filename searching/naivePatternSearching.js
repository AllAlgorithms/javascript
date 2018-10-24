/**
 * @author Rashik Ansar
 *
 * @param {string} txt The text in which pattern has to be searched
 * @param {string} pat Pattern to search in string
 * @returns {number} The total count of given pattern occurence/s in the text
 */
function naiveSearch(txt, pat) {
  let count = 0;
  for (let i = 0; i < txt.length; i++) {
    for (let j = 0; j < pat.length; j++) {
      if (pat[j] !== txt[i + j]) {
        break;
      }
      if (j === pat.length - 1) {
        count++;
      }
    }
  }
  return count;
}

let x = naiveSearch('aaabbcbaabcabcaaabcaccaabcaade', 'abc');
console.log(x); //4
let y = naiveSearch('meow', 'ow');
console.log(y); //1
