var BSTNode = /** @class */ (function () {
    function BSTNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return BSTNode;
}());
var minVal = function (node) {
    var temp = node;
    while (temp.left !== null) {
        temp = temp.left;
    }
    return temp.data;
};
var bstDeletion = function (root, ele) {
    if (!root) {
        return null;
    }
    if (ele > root.data) {
        root.right = bstDeletion(root.right, ele);
    }
    else if (ele < root.data) {
        root.left = bstDeletion(root.left, ele);
    }
    else {
        if (!root.left) {
            return root.right;
        }
        else if (!root.right) {
            return root.left;
        }
        else {
            root.data = minVal(root.right);
            root.right = bstDeletion(root.right, root.data);
        }
    }
    return root;
};
var root = new BSTNode(8);
root.left = new BSTNode(6);
root.left.left = new BSTNode(5);
root.left.right = new BSTNode(7);
root.right = new BSTNode(19);
root.right.right = new BSTNode(20);
root.right.left = new BSTNode(10);
root.right.left.right = new BSTNode(15);
console.log(bstDeletion(root, 19));
