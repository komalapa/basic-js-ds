const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.start = null;
    this.last = this.start;
  }
  getUnderlyingList() {
    return this.start
  }

  enqueue(value) {
    const node = { value: value, next: null }
    if (this.start === null){
      this.start =node;
      this.last =node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    
  }

  dequeue() {
    const value = this.start.value;
    this.start = this.start.next
    return value
  }

}
