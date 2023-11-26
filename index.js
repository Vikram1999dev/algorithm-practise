var LinkedNode = /** @class */ (function () {
    function LinkedNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedNode;
}());
var intersectionLkNde = function (head1, head2) {
    if (!head1 || !head2) {
        return null;
    }
    var ptr1 = head1;
    var ptr2 = head2;
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
        if (ptr1 === ptr2) {
            return ptr1;
        }
        if (!ptr1) {
            ptr1 = head2;
        }
        if (!ptr2) {
            ptr2 = head1;
        }
    }
    return ptr1;
};
// let newNode:LinkedNode|null;
var head1 = new LinkedNode(1);
head1.next = new LinkedNode(2);
head1.next.next = new LinkedNode(3);
head1.next.next.next = new LinkedNode(4);
head1.next.next.next.next = new LinkedNode(5);
head1.next.next.next.next.next = new LinkedNode(6);
var head2 = new LinkedNode(1.1);
head2.next = new LinkedNode(2.2);
head2.next.next = new LinkedNode(3.3);
head2.next.next.next = new LinkedNode(4.4);
head2.next.next.next.next = head1.next.next.next;
console.log(intersectionLkNde(head1, head2));
