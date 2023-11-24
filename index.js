var LinkedNode = /** @class */ (function () {
    function LinkedNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedNode;
}());
var reverseLinkedList = function (head) {
    if (!head)
        return head;
    var prev = null;
    var curr = head;
    var forr = null;
    while (curr) {
        forr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forr;
    }
    // console.log(prev);
    head = prev;
    return head;
};
var head = new LinkedNode(1);
head.next = new LinkedNode(2);
head.next.next = new LinkedNode(3);
head.next.next.next = new LinkedNode(4);
console.log(reverseLinkedList(head));
