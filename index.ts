class LinkedNode {
  data: number;
  next: LinkedNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

const hasCycle = (node: LinkedNode | null): boolean => {
  if (!node && !node.next) return false;

  let slow = node;
  let fast = node;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

const node1 = new LinkedNode(1);
const node2 = new LinkedNode(2);
const node3 = new LinkedNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node2; // Creating a cycle

console.log(hasCycle(node1));
