/**
 * @author Rashik Ansar
 *
 * Implementation of doubly linked list
 * Doubly linked list is a linear data structure
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adding new node as a tail of the linked list
   * @param {any} data This dataue is added at the end of list
   * @returns {DoublyLinkedList} LinkedList after adding new node as tail
   */
  push(data) {
    let temp = new Node(data);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      temp.prev = this.tail;
      this.tail = temp;
    }
    this.length++;
    return this;
  }

  /**
   * Adding new node as a head of the linked list
   * @param {any} data This dataue is added at the beginning of the list
   * @returns {DoublyLinkedList} LinkedList after adding a new node as head
   */
  unshift(data) {
    let current = new Node(data);
    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      this.head.prev = current;
      current.next = this.head;
      this.head = current;
    }
    this.length++;
    return this;
  }

  /**
   * Adding a node to the linkedList at specified position
   * @param {number} index Position at which new node to insert
   * @param {any} data  dataue in the new node
   * @returns {DoublyLinkedList} LinkedList after inserting a new node
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
    insertNode.prev = previous;
    insertNode.next = temp;
    temp.prev = insertNode;
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
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
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
    let removeNode = this.get(index);
    let before = removeNode.prev;
    let after = removeNode.next;
    before.next = after;
    after.prev = before;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
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
    let current;
    if (index <= this.length / 2) {
      let counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  /**
   * Change the data of node at specified index
   * @param {number} index Index of the node
   * @param {any} data data replaces the current data at given index
   * @returns {DoublyLinkedList} LinkedList
   */
  set(index, data) {
    let existedNode = this.get(index);
    if (existedNode) {
      existedNode.data = data;
      return this;
    }
  }

  /**
   * Traversing or Printing the Linked list
   */
  traverse() {
    let current = this.head;
    console.log(this.length);
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
}
