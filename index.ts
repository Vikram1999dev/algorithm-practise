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

const treeDepth = (root: TreeNode | null, level: number) => {
  if (!root) return 0;
  return (
    level + treeDepth(root.left, level + 1) + treeDepth(root.right, level + 1)
  );
};

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

console.log(treeDepth(root, 0));
