class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const findClosest = (
  root: TreeNode | null,
  k: number,
  closest: number,
): number => {
  if (!root) {
    return closest;
  }

  if (Math.abs(k - closest) > Math.abs(k - root.data)) {
    closest = root.data;
  }

  if (k > root.data) {
    return findClosest(root.right, k, closest);
  } else if (k < root.data) {
    return findClosest(root.left, k, closest);
  } else {
    return closest;
  }
};

// Creating a BST with 15 nodes
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(9);
root.right.left.left = new TreeNode(11);
root.right.left.right = new TreeNode(14);
root.right.right.left = new TreeNode(17);
root.right.right.right = new TreeNode(20);

console.log(findClosest(root, 18, Infinity));
