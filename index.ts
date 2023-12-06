//   1
// /   \
// 2    3
// / \
// 4  5

// Path from root to leaf with values 1 -> 2 -> 4: 1 + 2 + 4 = 7
// Path from root to leaf with values 1 -> 2 -> 5: 1 + 2 + 5 = 8
// Path from root to leaf with values 1 -> 3: 1 + 3 = 4
// So, the branch sums for this binary tree are 7, 8, and 4.

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

const branchSums = (
  root: TreeNode | null,
  sum: number,
  sums: number[],
): number[] => {
  if (!root) {
    return [];
  }
  sum += root.data;
  if (!root.left && !root.right) {
    sums.push(sum);
  }

  if (root.left) {
    branchSums(root.left, sum, sums);
  }
  if (root.right) {
    branchSums(root.right, sum, sums);
  }

  return sums;
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

console.log(branchSums(root, 0, []));
