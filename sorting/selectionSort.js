// JavaScript implementation of selection sort
//
// Author: Niezwan Abdul Wahid

function selectionSort(arr){
  let min, temp; 
  let len = arr.length;
  for(let i = 0; i < len; i++){
    min = i;
    for(let  j = i+1; j<len; j++){
       if(arr[j]<arr[min]){
          min = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

// Test
let arr = [-8, 46, 24, 33, 10, 2, 81, 50];
console.log('Unsorted array ');
console.log(arr.slice());

console.log('Sorted array ');
console.log(selectionSort(arr.slice()));
