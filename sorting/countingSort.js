// JavaScript implementation of counting sort

function countingSort(arr, min, max)
  {
    let i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}

//Test
let array = [2, 0, 3, 5, 4, 1]; 
console.log(array.length);
console.log("Original Array"); 
console.log(array); 
console.log("Sorted Array"); 
console.log(countingSort(array, 0, 5));