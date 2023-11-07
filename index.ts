class LinkedNode {
  data: number;
  next: LinkedNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

var findKthEle = (head: LinkedNode | null, k: number): LinkedNode | null => {
  if (!head) return null;
  let length: number = 0;
  let temp: LinkedNode = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  temp = head;
  for (let i: number = 0; i < length - k; i++) {
    temp = temp.next;
  }
  return temp;
};

const temp = new LinkedNode(1);
temp.next = new LinkedNode(2);
temp.next.next = new LinkedNode(3);
temp.next.next.next = new LinkedNode(4);
temp.next.next.next.next = new LinkedNode(5);

console.log(findKthEle(temp, 2));
