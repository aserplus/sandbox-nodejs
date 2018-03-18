module.exports = class Queue {
  constructor() {
    this.items = [];
  }

  /**
     * Add item to end of queue
     * @param {*} item
     */
  enqueue(item) {
    /* NOTE: could do the same thing with push() */

    const newArray = new Array(this.items.length + 1);

    for (let i = 0; i < this.items.length; i += 1) {
      newArray[i] = this.items[i];
    }

    newArray[newArray.length - 1] = item;

    this.items = newArray;
  }

  /**
     * Remove and return first item in queue
     */
  dequeue() {
    /* NOTE: could do the same thing with shift() */
    if (this.isEmpty()) {
      throw new Error('Underflow');
    }

    const dequeuedItem = this.items[0];
    const newArray = new Array(this.items.length - 1);

    for (let i = 1; i < this.items.length; i += 1) {
      newArray[i - 1] = this.items[i];
    }

    this.items = newArray;

    return dequeuedItem;
  }

  /**
     * Returns the front item of the queue
     */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  /**
     * Returns the last item of the queue
     */
  rear() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  /**
     * Check's if the queue is empty
     */
  isEmpty() {
    return this.items.length === 0;
  }
};
