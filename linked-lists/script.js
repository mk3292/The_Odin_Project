class LinkedList {
    constructor (head = null) {
        this.head= head;
        this.size = 1;
    }

    append(value) {
        let newNode = new node(value);
        let current;

        if (this.head == null) {
            this.head = newNode;
        }
        else {
            current = this.head;
            while (current.next) {
                current= current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(value) {
        let newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    size() {
        return this.size;
    }

    headVal () {
        return this.head.value;
    }

    tailVal () {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode.value;
    }

    atIndex(num) {
        let targNode = this.head;
        while (num > 1) {
            targNode = targNode.next;
            num--;
        }
        return targNode;
    }

    pop() {
        let counter = 1;
        let isLast = this.head;
        while(isLast.next) {
            isLast = isLast.next;
            counter ++;
        }
        isLast.next = null;
        this.size--;
        return isLast;
    }

    contains(num) {
        let curr = this.head;
        while (curr.next !== null) {
            if (num == curr.value) {
                return true;
            }
            curr = curr.next;
        }
        if (curr.value == num) {
            return true;
        }
        return false;
    }

    find(loc) {
        let curr = this.head;
        let counter = 1;
        for (let i = 1; i <= this.size; i++) {
            if (loc == curr.value) {
                return counter;
            }
            else {
                counter++;
                curr = curr.next;
            }
        }
        return null;

    }

    toString() {
        let curr = this.head;
        let string = '';

        for (let i = 1; i <= this.size; i++) {
            string += curr.value + " -> ";
            curr = curr.next;
        }
        string += 'null';
        return string;
    }
}

class node {
    constructor (value) {
        this.next = null;
        this.value = value;
    }
}




