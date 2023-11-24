class LinkedNode {
  data: number;
  next: LinkedNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

var reverseLinkedList = (head: LinkedNode | null): LinkedNode | null => {
  if (!head) return head;
  let prev: LinkedNode | null = null;
  let curr: LinkedNode | null = head;
  let forr: LinkedNode | null = null;
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

let head = new LinkedNode(1);
head.next = new LinkedNode(2);
head.next.next = new LinkedNode(3);
head.next.next.next = new LinkedNode(4);
console.log(reverseLinkedList(head));
