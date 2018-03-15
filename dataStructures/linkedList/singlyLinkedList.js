const Node = require('./node');

module.exports = class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if (this.isEmpty()) {
            this.head = new Node(data);
            return;
        } 
        
        const newNode = new Node(data);
        newNode.next =  this.head;
        
        this.head = newNode;
    }

    insertLast(data) {
        if (this.isEmpty()) {
            this.head = new Node(data);
            return;
        } 
        
        const lastNode = getLastNode(this.head);
        lastNode.next = new Node(data);
    }

    removeFirst() {
        if (this.isEmpty()) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (this.isEmpty()) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let prev;

        while (current.next) {
            prev = current;
            current = current.next;
        }
        
        prev.next = null;
    }

    isEmpty() {
        return this.head === null;
    }
}

const getLastNode = (head) => {
    let node = head;

    while (node.next) {
        node = node.next;
    }

    return node;
};
