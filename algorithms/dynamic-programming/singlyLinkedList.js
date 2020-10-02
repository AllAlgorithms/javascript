// Implementation of single link list
// Author: Sheary Tan

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyList {
    constructor() {
        // Initializing...
        // There is nothing at the beginning so
        // the head & the tail should be empty,
        // and the length should be zero too
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 1st method: push (push the val into the end of the list)
    push(val) {
        // Firstly, we have to accept a new value
        var newNode = new Node(val);
        // If there is no head, means there is nothing on the list,
        // set the head & tail pointers to this value.
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If there is value existed, assign the newNode to the next value
            // of the current existing value
            this.tail.next = newNode;
            // Update the tail to it!
            this.tail = newNode;
        }
        // Increment the length and return the newly created link-list
        this.length++;
        return this;
    }

    // 2nd method: pop (remove the last item)
    pop() {
        // If there is nothing on the list, return undefined
        if (!this.head) return undefined;
        // Loop through to find the last item
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next
        }
        // Set the found tail to tail
        this.tail = newTail;
        // The next one will be null since we 
        // would like to remove it
        this.tail.next = null;
        // Decrease the length
        this.length--;
        // If there is nothing left after removing
        // set the head and tail to be null
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // 3rd method: shift (remove the first item)
    shift() {
        // If there is no nothing on the list, return undefined
        if(!this.head) return undefined;
        // Store the current head in a new variable
        var currentHead = this.head;
        // Shift the head to the next value of the currentHead
        this.head = currentHead.next;
        // Decrement the length since we have removed the head
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    // 4th method: unshift (add item to the beginning )
    unshift(val) {
        // Initialize the value to a new node;
        var newNode = new Node(val);
        // If there is nothing on the list, set the head and tail
        // point to that new node
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // In order to set the head value points to the head,
            // we have to set the current head to the next item of newNode
            newNode.next = this.head;
            // and now we can assign the head to newNode!
            this.head = newNode
        }
        // Increment the length after adding the new head
        this.length++;
        return this;
    }

    // 5th method: get
    get(i) {
        // get accepts an index in and find the  specific value
        // If i is less than zero, or greater and equal to the length 
        // of the current link list, return null;
        if(i < 0 || i >= this.length) return null;
        // Use the counter to find the value
        var counter = 0;
        var current = this.head;
        while(counter !== i) {
            current = current.next;
            counter++
        }
        // Found it and return
        return current
    }

    // 6th method: set 
    // Use the given index to find the target value and change it with the new 
    // given value
    set(i, val) {
        var targetNode = this.get(i);
        if(targetNode) {
            targetNode.val = val;
            return true;
        }
        return false;
    }

    // 8th method: remove (from any index)
    remove(i) {
        // Check if there's anything on the list
        if(i < 0 || i >= this.length) return undefined;
        if(i === 0) return this.shift();
        if(i === this.length - 1) return this.pop();
        // Get the previous item of the target
        var previousTarget = this.get(i - 1);
        // Since we've got the previous item of the target,
        // we now can remove the target by setting the next item of previousTarget
        // to the next item of "removed"
        var removed = previousTarget.next;
        previousTarget.next = removed.next
        // Decrease the length
        this.length--; 
        return removed;
    }

    // 9th method: reverse
    reverse() {
        // Firstly we have to set the head to the tail,
        // and the tail to the head
        var target = this.head;
        this.head = this.tail;
        this.tail = target;
        // Now we have to re-arrange those next & previous 
        // items of the list
        var next;
        var prev = null;
        // Loop through every single item on the list
        for(let i = 0; i < this.length; i++) {
            // This part is a bit confusing, let's take an example
            // Example = [1, 2, 3, 4, 5], T = target, P = previous, N = next
            next = target.next; 
            // Firstly, the target is 1
            // [1, 2, 3, 4, 5]
            //  T
            // And target.next is 2
            // [1, 2, 3, 4, 5]
            //  T  N
            target.next = prev;
            // Remember our target is 1 & prev is null? Now it said the next item of
            // 1 is null,
            // 1 -> null
            prev = target;
            // Now we're setting the "prev = null" to the target value
            // which now equals to "prev = 1"
            // [1, 2, 3, 4, 5]
            //  P  N
            target = next;
            // And lastly we set the "next" value to be T
            // [1, 2, 3, 4, 5]
            //  P  T


            // So the cycle repeats again, now let's go through 1 more cycle
                // [1, 2, 3, 4, 5]
                //  P  T
            // next = target.next
                // [1, 2, 3, 4, 5]
                //  P  T  N
            // target.next = prev
                // Remember we have the list (1 -> null)?
                // now target.next = prev means the next item of 2 is 1
                // 2 -> 1 -> null
            // prev = target
                // Now 2 is prev
                // [1, 2, 3, 4, 5]
                //     P  N
            // target = next
                // And 3 is now the target
                // [1, 2, 3, 4, 5]
                //     P  T
            // And the cycle repeats again until the target reach the end of the list...
        }
        return this;
    }

    // 10th method: insert
    insert(i, val) {
        // Check the requirements
        if(i < 0 || i >= this.length) return false;
        if(i === this.length) return !!this.push(val);
        if(i === 0) return !!this.unshift(val);

        // Initialize a new node
        var newNode = new Node(val);
        // Get the previous node of newNode
        var prevNode = this.get(i - 1);
        // Remember we haven't insert the newNode into the list!
        // And also store the next item of prevNode in a temporary variable
        // because we are going to set it to the next item of newNode later
        var temp = prevNode.next;
        // Now we can set the next item of prevNode to newNode
        prevNode.next = newNode;
        // Then the next item of newNode will be the temporary item we store
        newNode.next = temp;
        // Increment the length
        this.length++;
        return true;
    }

}
