/* "Shell sort or Shell's method, is an in-place comparison sort. 
It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). 
The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. 
Starting with far apart elements can move some out-of-place elements into position faster than a simple nearest neighbor exchange." */

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

