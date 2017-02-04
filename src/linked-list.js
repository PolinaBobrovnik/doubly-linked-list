
(function () {
    'use strict';  /** IMP ! **/

    function Iterator(theList) {
        this.list = theList || null;
        this.currentNode = null;
    }

    Iterator.prototype = {

        next: function() {
            var current = this.currentNode;

            if (this.currentNode !== null) {
                this.currentNode = this.currentNode.next;
            }

            return current;
        },

        hasNext: function() {
            return this.currentNode !== null;
        },

        reset: function() {
            this.currentNode = this.list.getHeadNode();
        },

        first: function() {
            this.reset();
            return this.next();
        },

        setList: function(theList) {
            this.list = theList;
            this.reset();
        },

        each: function(callback) {
            this.reset();
            var el;
            while (this.hasNext()) {
                el = this.next();
                callback(el);
            }
        }
    };

    module.exports = Iterator;

}());

const Node = require('./node'); 

class LinkedList { 
	
	constructor() {
	    this.head = null;
	    this.tail = null;
	    this.count = 0;

	    this.iterator = new Iterator(this); /** Flexible in other interpr **/ 
	 }


	append(data) {
		var newNode = this.createNewNode(data);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
            this.iterator.reset();
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;

        return true;
	}

	head() {
		return this.head;
	}

	tail() {
		return this.tail;
	}

	at(index) {

        if (this.isEmpty() || index > this.getSize() - 1) {
            return -1;
        }

        var node = this.getHeadNode();
        var position = 0;

        while (position < index) {
            node = node.next;
            position += 1;
        }

        return node;
	}

	insertAt(index, data) {
		var current = this.getHeadNode(),
            newNode = this.createNewNode(data),
            previous = null,
            position = 0;

        if (index < 0 || index > this.getSize() - 1) {
            return false;
        }

        if (index === 0) {
            this.insertFirst(data);
            return true;
        }

        while (position < index) {
            previous = current;
            current = current.next;
            position += 1;
        }

        previous.next = newNode;
        newNode.next = current;
        this.size += 1;

        return true;
	}

	isEmpty() {
		return (this.size === 0);
	}

	clear() {
		while (!this.isEmpty()) {
            this.removeFirst();
        }
	}

	deleteAt(index) {
		var current = this.getHeadNode(),
            previous = null,
            position = 0;

        if (index < 0 || index > this.getSize() - 1) {
            return null;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        if (index === this.getSize() - 1) {
            return this.remove();
        }

        while (position < index) {
            previous = current;
            current = current.next;
            position += 1;
        }

        previous.next = current.next;
        this.size -= 1;

        return current;
	}

	reverse() {
		var currNode = null,
		loopNode = null,
		nextNode = null;

		currNode = this.head;
		nextNode =  this.head.next;
		this.head.next = null;

		while(nextNode !== null){
			loopNode = nextNode.next;
			nextNode.next = currNode;
			currNode = nextNode;
			nextNode = loopNode;
		}
		
		this.head = currNode;
	}

	indexOf(data) {
		this.iterator.reset();
        var current;
        var index = 0;

        while (this.iterator.hasNext()) {
            current = this.iterator.next();
            if (_.isEqual(current.getData(), nodeData)) {
                return index;
            }
            index += 1;
        }

        return -1;
	} 
} 

module.exports = LinkedList;

