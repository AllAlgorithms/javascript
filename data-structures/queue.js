/**
 * @author Rashik Ansar
 *
 * Implementation of Queue Data structure
 * Queue follows FIFO (First In First Out) Principle
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adding data to the end of queue
   * @param {*} data Data to add in the queue
   * @returns {Queue} Returns the queue after adding new data
   */
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  /**
   * Removing data from the beginning of the queue
   * @returns Data that is removing from queue
   */
  dequeue() {
    if (!this.first) {
      throw Error(
        'UNDERFLOW::: The queue is empty, there is nothing to remove'
      );
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }

  /**
   * @returns First element in the queue
   */
  peek() {
    if (!this.first) {
      throw Error('Stack is empty');
    }
    return this.first.data;
  }
}
