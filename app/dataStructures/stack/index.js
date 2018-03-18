module.exports = class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Insert item at end of the stack
     * @param {*} item 
     */
    push(item) {
        /* NOTE: could do the same thing with push() */
        const newArray = new Array(this.items.length + 1);

        for (let i = 0; i < this.items.length; i++) {
            newArray[i] = this.items[i];
        }

        newArray[newArray.length - 1] = item;

        this.items = newArray;
    }

    /**
     * Remove and return last item in queue
     */
    pop() {
        /* NOTE: could do the same thing with pop() */
        if (this.isEmpty()) {
            throw new Error('Underflow');
        }

        const poppedItem = this.items[this.items.length - 1];
        const newArray = new Array(this.items.length - 1);
    
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = this.items[i];
        }

        this.items = newArray;

        return poppedItem;
    }

    /**
     * Return last item in stack
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1];
    }

    /**
     * Check's if the stack is empty
     */
    isEmpty() {
        return this.items.length === 0;
    }
}
