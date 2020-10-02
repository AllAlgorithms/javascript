// JavaScript implementation of Sequential Search

// Author: Niezwan Abdul Wahid

let items = [3,7,33,42,5,66,44,65,20,34]

function sequentialSearch(item) {
    for(let i=0; i < items.length; i++) {
        if(items[i] === item) {
            console.log( item + " found at index " + i);
            return true;
        }
    }
    return false;
}

let item = sequentialSearch(33);
if(!item) {
    console.log('Item is not in array.');
}