/**
 * @author Rashik Ansar
 *
 * Implementation of singly linked list
 * Singly linked list is a linear data strucutre
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adding new node as a tail of the linked list
   * @param {any} data This dataue is added at the end of list
   * @returns {SinglyLinkedList} LinkedList after adding new node as tail
   */
  push(data) {
    let temp = new Node(data);
    if (!this.head) {
      this.head = temp;
      this.tail = this.head; // temp
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    this.length++;
    return this;
  }

  /**
   * Adding new node as a head of the linked list
   * @param {any} data This dataue is added at the beginning of the list
   * @returns {SinglyLinkedList} LinkedList after adding a new node as head
   */
  unshift(data) {
    let temp = new Node(data);
    if (!this.head) {
      this.head = temp;
      this.tail = this.head;
    } else {
      temp.next = this.head;
      this.head = temp;
    }
    this.length++;
    return this;
  }

  /**
   * Adding a node to the linkedList at specified position
   * @param {number} index Position at which new node to insert
   * @param {any} data  dataue in the new node
   * @returns {SinglyLinkedList} LinkedList after inserting a new node
   */
  insert(index, data) {
    if (index < 0 || index > this.length) {
      throw Error('Given index is out of range');
    }
    if (index === this.length) {
      return this.push(data);
    }
    if (index === 0) {
      return this.unshift(data);
    }
    let insertNode = new Node(data);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = insertNode;
    insertNode.next = temp;
    this.length++;
    return this;
  }

  /**
   * Removes the node at the end of linked list(tail of linked list)
   * @returns {Node} the node which is going to pop
   */
  pop() {
    if (!this.head) {
      throw Error(
        'UNDERFLOW :::: LinkedList is empty, there is nothing to remove'
      );
    }
    let current = this.head;
    let temp = current;
    while (current.next) {
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    this.emptyListCheck();
    return current;
  }

  /**
   * Removes the node from the beginnig of linked list(head of linked list)
   * @returns {Node} the node which is going to shift
   */
  shift() {
    if (!this.head) {
      throw Error(
        'UNDERFLOW :::: LinkedList is empty, there is nothing to remove'
      );
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    this.emptyListCheck();
    return current;
  }

  /**
   * Removes a node from the linkedList at specified position
   * @param {number} index
   * @returns {Node} Node which is removed from LinkedList
   */
  remove(index) {
    if (index < 0 || index > this.length) {
      throw Error('Given index is out of range');
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = temp.next;
    this.length--;
    return temp;
  }

  /**
   * Retrieve the node at specified index
   * @param {number} index Index of the node
   * @returns {Node} LinkedList Node at specified index
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      throw Error('Given index is out of range');
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /**
   * Change the data of node at specified index
   * @param {number} index Index of the node
   * @param {any} data data replaces the current data at given index
   * @returns {SinglyLinkedList} LinkedList
   */
  set(index, data) {
    // Here error checking will be done by the get method itself
    // No need to specify explicitly
    let existedNode = this.get(index);
    if (existedNode) {
      existedNode.data = data;
      return this;
    }
  }

  /**
   * Reversing the Linked list
   * @returns {SinglyLinkedList} LinkedList
   */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let previous = null;
    let after = null;
    while (temp) {
      after = temp.next;
      temp.next = previous;
      previous = temp;
      temp = after;
    }
    return this;
  }

  /**
   * Traversing or Printing the Linked list
   */
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  /**
   * @returns {[]} Linkedlist data as elements in Array
   */
  listAsArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  /**
   * Utility Function (PRIVATE FUNCTION)
   * if the length is zero then assign null to both head and tail
   */
  emptyListCheck() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}
