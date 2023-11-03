var LinkedNode = /** @class */ (function () {
    function LinkedNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedNode;
}());
var hasCycle = function (node) {
    if (!node && !node.next)
        return false;
    var slow = node;
    var fast = node;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow)
            return true;
    }
    return false;
};
var node1 = new LinkedNode(1);
var node2 = new LinkedNode(2);
var node3 = new LinkedNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node2; // Creating a cycle
console.log(hasCycle(node1));
