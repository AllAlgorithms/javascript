// JavaScript implementation of pancake sort

function pancake_sort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
      // find the index of the largest element not yet sorted
      let max_idx = 0;
      let max = arr[0];
      for (let j = 1; j <= i; j++) {
          if (arr[j] > max) {
              max = arr[j];
              max_idx = j;
          }
      }

      if (max_idx == i) 
          continue; // element already in place

      let new_slice;

      // flip arr max element to index 0
      if (max_idx > 0) {
          new_slice = arr.slice(0, max_idx+1).reverse();
          for ( j = 0; j <= max_idx; j++) 
              arr[j] = new_slice[j];
      }

      // then flip the max element to its place
      new_slice = arr.slice(0, i+1).reverse();
      for ( j = 0; j <= i; j++) 
          arr[j] = new_slice[j];
  }
  return arr;
}

const array = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array"); 
console.log(array); 
console.log("Sorted Array"); 
console.log(pancake_sort(array, 0, 5));
