class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }

    set setValue(value) {
        this.value = value;
    }

    set setNext(value) {
        this.next = value;
    }
}

class LinkedList  {
    constructor (value) {
        this.head = value;
        this.next = null; 
    }

    set setNext(value) {
        this.next = value;
    }

    append(value) {
        const newNode = new Node();
        newNode.setValue = value;

        if (this.size() === 1) {
            this.next = newNode;
        } else {
            let nextNode = this.next;

            while (nextNode.next !== null) {
                nextNode = nextNode.next;
            }

            nextNode.next = newNode;
        }

    };

    prepend(value) {
        //transform the previous head value in a node value and set its succeeding element as the third in the chain
        const previousHead = new Node();
        previousHead.setValue = this.head;
        previousHead.setNext = this.next;
        
        //rewrite head value and set the next key to the previous head value
        this.head = value;
        this.next = previousHead;
    };

    size() {
        //iterative approach
        /* 
        let current = this.next;
        let count = 1;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
        */

        //recursive approach
        function getSize(node) {
            if (node.next === null) {
                return 1;
            } else {
                return 1 + getSize(node.next);
            }
        }
        return getSize(this);
    }

    firstNode() {
        return this.head;
    }

    lastNode() {

        if (this.next === null) {
            return this.head
        } else {

            let nextNode = this.next;

            while (nextNode.next !== null) {
                nextNode = nextNode.next;
            }

            return nextNode.value
        }

    };

    at(num) {

        if (num >= this.size()) {
            return "Not found"
        } else if (num === 0) {
            return this.head
        } else {
            let count = 1; 
            let node = this.next; 

            while (num !== count) {
                count += 1;
                node = node.next;
            }
            
            return node.value;
        }
    }

    pop() {

        if (this.next !== null) {

            let nextNode = this.next.next;

            while (nextNode.next !== null) {
                nextNode = nextNode.next;
            }

            nextNode = null;
        }
    }
}

let fruit = new LinkedList("apple")

fruit.append("orange")
console.log(fruit.lastNode())

fruit.append("banana");
console.log(fruit.lastNode())

fruit.pop()
console.log(fruit.lastNode())