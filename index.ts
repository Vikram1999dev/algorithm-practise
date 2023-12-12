class LinkedNode {
  data: number;
  next: LinkedNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

const removeDuplicate = (head: LinkedNode | null): LinkedNode | null => {
  if (!head) {
    return null;
  }
  let temp = head;
  while (temp.next) {
    if (temp.data === temp.next.data) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

let head = new LinkedNode(1);
head.next = new LinkedNode(2);
head.next.next = new LinkedNode(2);
head.next.next.next = new LinkedNode(4);
head.next.next.next.next = new LinkedNode(5);
head.next.next.next.next.next = new LinkedNode(5);
head.next.next.next.next.next.next = new LinkedNode(6);
console.log(head);
console.log(head.next.next);
console.log(removeDuplicate(head));
