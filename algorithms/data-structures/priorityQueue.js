/**
 * @author Rashik Ansar
 *
 * Implemntaion of priority queue
 * Lower the priority value higher its priority
 * under the hood its implementing minBinaryHeap
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Adding data to the queue
   * @param {*} data Data to add into queue
   * @param {*} priority Priority of the data
   * @returns {PriorityQueue}
   */
  enqueue(data, priority) {
    let temp = new Node(data, priority);
    this.values.push(temp);
    this.bubbleUp();
    return this;
  }

  /**
   * removing a node from the queue
   * @returns {Node}
   */
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  /**
   * enqueue helper function
   */
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // if (element.priority <= parent.priority) break; //maxBinaryHeap condition
      if (element.priority >= parent.priority) break; //minBinaryHeap condition
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * dequeue helper function
   */
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // Change below comparision operators to make maxBinaryHeap
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // Change below comparision operators to make maxBinaryHeap
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

let a = new PriorityQueue();
a.enqueue('Common Cold', 10);
a.enqueue('Gunshot wound', 2);
a.enqueue('Fever', 8);

console.log(a);
a.dequeue();
console.log(a);
a.dequeue();
console.log(a);
a.dequeue();
console.log(a);
