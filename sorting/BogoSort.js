/*
* In computer science, bogosort is a particularly ineffective sorting algorithm based on the generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted. It is not useful for sorting, but may be used for educational purposes, to contrast it with other more realistic algorithms.
*/

function Bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}


var array = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(array); 
console.log("Sorted Array Elements"); 
console.log(Bogosort(array));