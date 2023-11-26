class LinkedNode {
  data: number;
  next: LinkedNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

const intersectionLkNde = (
  head1: LinkedNode | null,
  head2: LinkedNode | null,
): LinkedNode | null => {
  if (!head1 || !head2) {
    return null;
  }

  let ptr1: LinkedNode = head1;
  let ptr2: LinkedNode = head2;

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
let head1 = new LinkedNode(1);
head1.next = new LinkedNode(2);
head1.next.next = new LinkedNode(3);
head1.next.next.next = new LinkedNode(4);
head1.next.next.next.next = new LinkedNode(5);
head1.next.next.next.next.next = new LinkedNode(6);

let head2 = new LinkedNode(1.1);
head2.next = new LinkedNode(2.2);
head2.next.next = new LinkedNode(3.3);
head2.next.next.next = new LinkedNode(4.4);
head2.next.next.next.next = head1.next.next.next;

console.log(intersectionLkNde(head1, head2));
