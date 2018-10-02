/** 
    JavaScript implementation of the binary search algorithm.

    Author: Brendan Albert

    This is a JavaScript iterative (rather than recursive) implementation of the binary search algorithm.
    
    The binary search algorithm works by looking at the middle element of a list.
    The list must be sorted to work correctly.
    This implementation uses ascending order.
    
    If the value being searched for is not the middle element, then we check
    if the value is smaller or larger than the middle element.

    This allows the size of the list being searched to be halved each iteration.

    The big O runtime of this algorithm is log(n).
    Log(n) is nice because it means that given a huge list, say of 1 million IDs,
    it will take no more than 20 iterations to determine if the ID is present.

    Arguments: value (that we are searching for), list_to_search (the list)
    
    Return: the value if it is found in the list or -1 if the value is not found.
 */
function binarySearch(value, list_to_search) {
    
    search_value = -1
    max_index = list_to_search.length - 1
    min_index = 0
    middle_index = Math.floor( (max_index + min_index) / 2)
    current_element = list_to_search[middle_index]

    while (max_index >= min_index) {

        if (current_element == value)
            return current_element

        else if (value > current_element)
            min_index = middle_index + 1

        else if (value < current_element)
            max_index = middle_index - 1
            
        middle_index = Math.floor( (min_index + max_index) / 2)
        current_element = list_to_search[middle_index]

    }

    return search_value
}

// Sample lists to test with
id_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
odd_list = [1,3,5,7,9,11,13,15,17,19]
short_list = ['allie', 'ben', 'charlie', 'danielle', 'emilio', 'fred', 'gina', 'henry', 'isabella']

console.log(binarySearch(3, odd_list))
