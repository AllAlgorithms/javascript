// JavaScript implementation of Binary Search

// Author: Niezwan Abdul Wahid

// Binary Search only applicable to a sorted array

let arrayOfItems = [1, 3, 5, 7, 9, 11, 13, 15, 16, 19, 22];

function binarySearch(arrayOfItems, itemToFind) {
	let low = 0;
	let high = arrayOfItems.length - 1;
	let mid, pointer;
	
	while(low <= high) {
	    mid = Math.floor((low + high) / 2),
	    pointer = arrayOfItems[mid];

	    if(pointer === itemToFind) {
                console.log('Found ' + pointer + " at index " + mid);
		    return;
	    }
	    if(itemToFind < pointer) {
	        high = mid - 1;
            } else {
	        low = mid + 1;
	    }
    }
	console.log("Item not found");
	return null;
}

binarySearch(arrayOfItems, 7);