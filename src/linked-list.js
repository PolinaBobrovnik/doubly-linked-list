const Node = require('./node'); 

class LinkedList { 
constructor(data = null, prev = null, next = null) {
	    this.data = data;
        this.prev = prev;
        this.next = next;
	    this.count = 0;
	    this.iterator = new Iterator(this);
	} 

append(data) {
var newNode = this.createNewNode(data);
        if (this.isEmpty()) {
            this.data = newNode;
            this.iterator.reset();
        } else {
            this.prev = newNode;
            this.next = newNode;
        }
        this.size += 1;

        return true;
} 

head() {
return this.prev;
} 

tail() {
return this.next;
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
	} } 
} 

module.exports = LinkedList;
