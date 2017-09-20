const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var newNode = new Node(data);
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = this._head;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        
        if (this.isEmpty() || index >= this.lenth) {
            return -1;
        }

        var node = this._head;
        var position = 0;

        while (position < index) {
            node = node.next;
            position++;
        }

        return node.data;
    }

    insertAt(index, data) {
        var current = this._head,
            newNode = new Node(data),
            previous = null,
            position = 0;

        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this._head = newNode;
            this._tail = this._head;
        }

        while (position < index) {
            previous = current;
            current = current.next;
            position++;
        }

        previous.next = newNode;
        newNode.next = current;
        this.length++;

        return this;
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        while (!this.isEmpty()) {
            this._head.data = null;
            this._tail.data = null;
            this.length = 0;
        }
        return this;
}

    deleteAt(index) {
        var current = this._head,
            previous = null,
            position = 0;

        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index == 0) {
            this._head = null;
        } else {

        if (index === this.length - 1) {
            this._tail = this._tail.prev;
        }

        while (position < index) {
            previous = current;
            current = current.next;
            position++;
        }

        previous.next = current.next;
    }
        this.length--;

        return this;
    }

    reverse() {
        var currNode = this._tail;
        var newNode = this._head;
        var i = this.length/2;
        var data;
        if (currNode === newNode) return this;
        else {
        while (i!=0) {
            data = newNode.data;
            newNode.data = currNode.data;
            currNode.data = data;
            newNode = newNode.next;
            currNode = currNode.prev;
            i--;
        }
        return this;
    }
}

    indexOf(data) {
        var currNode = this._head;
        var index = 0;

        while (currNode!=null && currNode.data != data) {
            currNode = currNode.next;
            index++;
        } 
        if (currNode != null) {
            return index;
        } else return -1;
    }
    } 

module.exports = LinkedList;