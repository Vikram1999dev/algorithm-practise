var LinkedNode = /** @class */ (function () {
    function LinkedNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedNode;
}());
var findKthEle = function (head, k) {
    if (!head)
        return null;
    var length = 0;
    var temp = head;
    while (temp) {
        length++;
        temp = temp.next;
    }
    temp = head;
    for (var i = 0; i < length - k; i++) {
        temp = temp.next;
    }
    return temp;
};
var temp = new LinkedNode(1);
temp.next = new LinkedNode(2);
temp.next.next = new LinkedNode(3);
temp.next.next.next = new LinkedNode(4);
temp.next.next.next.next = new LinkedNode(5);
console.log(findKthEle(temp, 2));
