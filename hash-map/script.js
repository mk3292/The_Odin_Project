class HashMap {
    constructor () {
        this.buckets = new Array(16).fill(null);
        this.loadFactor = 0.75;
        this.capacity = 16;
    }
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.capacity;
        }
     
        return hashCode;
      } 

    set(key, value) {
        const index = this.hash(key);
        const newNode = new Node(key, value);

        if (!this.buckets[index]) {
            this.buckets[index] = newNode;
        }
        else {
            let currentNode = this.buckets[index];
            while (currentNode.next && currentNode.key !== key) {
                currentNode = currentNode.next;
            }

            if (currentNode.key !== key) {
                currentNode.next = newNode;    
            }
            else {
                currentNode.value = value;
            }        
        }

        if (this.count() >= this.capacity*this.loadFactor) {
            this.rehash();
        }
    }

    get(key) {
        let hashKey = this.hash(key);
        if (this.buckets[hashKey]) {
            let currNode = this.buckets[hashKey];
            while (currNode.key !== key){
                currNode = currNode.next;
            }
            return currNode ? currNode.value : null;
        }
        return null;
    }

    has(key) {
        let hashKey = this.hash(key);
        if (this.buckets[hashKey]) {
            let currNode = this.buckets[hashKey];
            while (currNode.key !== key) {
                currNode = currNode.next;
            }
            if (currNode) {
                return true;
            }
            return false;
        }
        return false;
    }

    remove(key) {
        let hashKey = this.hash(key);
        if (this.buckets[hashKey]) {
            let currNode = this.buckets[hashKey];
            let preNode = null;
            while (currNode.key !== key && currNode) {
                preNode = currNode;
                currNode = currNode.next;
            }

            if (currNode) {
                if (preNode) {
                    preNode.next = currNode.next;
                }
                else {
                    this.buckets[hashKey] = null;
                }
                return true;
            }
        }
        return false;
    }

    count() {
        let counter = 0;
        
        this.buckets.forEach((bucket) => {
            if(bucket) {
                let currNode = bucket;
                while (currNode) {
                    counter++;
                    currNode = currNode.next;
                }
            }
        });

        return counter;
    }

    clear() {
        this.buckets.fill(null);
    }

    keys() {
        let arr = [];
        this.buckets.forEach((bucket) => {
            if (bucket) {
                let currNode = bucket;
                while(currNode) {
                    arr.push([currNode.key]);
                    currNode = currNode.next;
                }
            }
        });
        return arr;
    }

    values() {
        let arr = [];
        this.buckets.forEach((bucket) => {
            if (bucket) {
                let currNode = bucket;
                while(currNode) {
                    arr.push([currNode.value]);
                    currNode = currNode.next;
                }
            }
        });
        return arr;
    }

    entryPairs() {
        let arr = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                let currNode = bucket;
                while(currNode) {
                    arr.push([currNode.key, currNode.value]);
                    currNode = currNode.next;
                }
            }
        });

        return arr;
    }

    rehash() {
        let oldPairs = this.entryPairs();
        this.capacity = this.capacity*2;
        this.buckets = new Array(this.capacity).fill(null);

        oldPairs.forEach((pair) => {
            this.set(pair[0], pair[1]);
        });
    }

}

class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}