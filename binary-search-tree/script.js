class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor (arr) {
        this.arr = this.sortUnique(arr);
        this.root = this.buildTree(this.arr, 0, this.arr.length-1);
        this.inOrderVals = [];
        this.preOrderVals = [];
        this.postOrderVals = [];
    }

    sortUnique(arr) {
        const map = {};
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            if (!map[arr[i]]) {
                map[arr[i]] = true;
                res.push(arr[i]);
            }
    }
        return res.sort((a, b) => a - b);
    }

    buildTree(arr, start, end) {

        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end)/2);
        let node = new Node(arr[mid]);
        
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);

        return node;
    }

    insert(value, root = this.root) {
        
        if (root == null) {
            return (root = new Node(value));
        }

        if (root.data < value) {
            root.right = this.insert(value, root.right); 
        }
        else {
            root.left = this.insert(value, root.left);
        }
        return root;

    }

    deleteItem(value, root = this.root) {
        if (root == null) {
            return root;
        }

        if (value < root.data) {
            root.left = this.deleteItem(value, root.left);
        }
        else if (value > root.data) {
            root.right = this.deleteItem(value, root.right);
        }
        // If the value is found, next steps. 
        else {
            if (root.left == null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }
            root.data = minValue(root.right);
            root.right = this.deleteItem(root.data, root.right);
        }
        return root;
    }

    find(value, root = this.root) {
        if (root == null) {
            return false;
        }
        if (root.data == value) {
            return root;
        }
        else {
            if (root.data > value) {
                return this.find(value, root.left);
            }
            else if (root.data < value) {
                return this.find(value, root.right);
            }
            
        }
        return root;
    }

    levelOrder(root = this.root) {
        let donorList = [];
        let finalList = [];

        if (root == null) {
            return;
        }

        donorList.push(root);

        while (donorList.length > 0) {
            let curr = donorList.shift(root);
            finalList.push(curr.data);

            if (curr.left !== null) {
                donorList.push(curr.left);
            }
            
            if (curr.right !== null) {
                donorList.push(curr.right);
            }
        }
        return finalList;
    }

    inOrder(root = this.root) {
        if (root == null) {
            return;
        }
        if (root.left !== null) {
            this.inOrder(root.left);
        }

        if (root.data !== undefined) {
            this.inOrderVals.push(root.data);
        }

        if (root.right !== null) {
            this.inOrder(root.right);
        }

        return this.inOrderVals;
    }

    preOrder(root = this.root) {
        if (root == null) {
            return;
        }

        this.preOrderVals.push(root.data);

        this.preOrder(root.left);
        this.preOrder(root.right);

        return this.preOrderVals;
    }

    postOrder(root = this.root) {
        if (root == null) {
            return;
        }

        this.postOrder(root.left);
        this.postOrder(root.right);

        this.postOrderVals.push(root.data);

        

        return this.postOrderVals;
    }

    height(root = this.root) {
        if (root == null) {
            return -1;
        }
        let left = this.height(root.left);
        let right = this.height(root.right);
        return Math.max(left, right) + 1;
    }

    depth(node, root = this.root, count = 0) {
        if (root == null) {
            return;
        }
        if (root.data == node) {
            return count;
        }

        if (root.data < node) {
            return this.depth(node, root.right, (count + 1));
        }
        if (root.data > node) {
            return this.depth(node, root.left, (count + 1));
        }
    }

    isBalanced(root = this.root) {
        if (root == null) {
            return false;
        }

        let left = root.left;
        let right = root.right;

        if (Math.abs(this.height(left)- this.height(right)) < 1) {
            return true;
        }
        return false;
    }
    reBalance(root = this.root) {
        let arr = this.inOrder();
        root = this.buildTree(arr, 0, arr.length - 1);
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

function minValue(node) {
    let minV = node.data;
    while (node != null) {
        minV = node.data;
        node = node.left;
    }
    return minV;
}


let test = [11, 22, 5, 7, 11, 10, 1, 26, 5];
balanced = new Tree (test);
balanced.insert(19);
prettyPrint(balanced.root);
balanced.deleteItem(10);
prettyPrint(balanced.root);
console.log(balanced.find(5));
console.log("Level order: ", balanced.levelOrder());
console.log("In order: ", balanced.inOrder());
console.log("Pre order: ", balanced.preOrder());
console.log("Post order: ", balanced.postOrder());
console.log("Height: ", balanced.height());
console.log("Depth of 22: ", balanced.depth(22));
console.log("Depth of 11: ", balanced.depth(11));
console.log("Depth of 19: ", balanced.depth(19));
console.log("Is it balanced?: ", balanced.isBalanced());



