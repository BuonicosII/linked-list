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

    get getNext() {
        return this.next;
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
        this.next = newNode;
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

            if (node === null) {
                return 0;
            } else {
                return 1 + getSize(node.next);
            }
        }

        getSize(this)
    }
}

let fruit = new LinkedList("apple")

fruit.append("orange")

console.log(fruit);

fruit.prepend("banana");

console.log(fruit)

console.log(fruit.size())