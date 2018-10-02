// JavaScript implementation of gnome sort
//
// Author: Dito Baskoro

function gnomeSort(arr) 
{
    function moveBack(i) 
  {
        for( ; i > 0 && arr[i-1] > arr[i]; i--)
        {
            let t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = t;
        }
    }
    for (let i = 1; i < arr.length; i++) 
    {
        if (arr[i-1] > arr[i]) moveBack(i);
    }
    return arr;
}

const array = [3, 0, 2, 5, -1, 4, 1, -2]; 
console.log("Original Array"); 
console.log(array); 
console.log("Sorted Array"); 
console.log(gnomeSort(array));
