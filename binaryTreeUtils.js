function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * Print the tree in parent/children order
 *
 * For example:
 * Input:
 *       1
 *     /   \
 *    2     3
 *         / \
 *        4   5
 * Prints:
 * [1, 2, 3, 'n', 'n', 4, 5]
 *
 * Notes:
 * - 'n' stands for null
 * - there is no trailing 'n's for all leaf nodes
 *
 * @param {TreeNode} root - input tree root
 */
function printTree(root) {
  if (root === null) {
    console.log([]);
    return;
  }
  let q = [];
  let res = [];
  q.push(root);
  while (q.length > 0) {
    let node = q.shift();
    if (node === null) {
      res.push("n");
      continue;
    }
    res.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }
  while (res.length && res[res.length - 1] === 'n') {
    res.pop();
  }
  console.log(res);
}

/**
 * Build the tree with given array
 *
 * For example:
 * Input:
 * [1, 2, 3, 'n', 'n', 4, 5]
 *
 * Returns:
 *       1
 *     /   \
 *    2     3
 *         / \
 *        4   5
 *
 * Notes:
 * - 'n' stands for null
 * - there is no trailing 'n's for all leaf nodes
 *
 * @param {( string | number)[]} data - the array representation of a tree
 * @return {TreeNode} - the tree built from input
 */
function buildTree(data) {
  if (data.length === 0) {
    return null;
  }
  let q = [];
  let root = new TreeNode(data[0]);
  q.push(root);
  for (let i = 1; i < data.length; i++) {
    let parent = q.shift();
    if (data[i] !== "n") {
      let left = new TreeNode(data[i]);
      parent.left = left;
      q.push(left);
    }
    if (data[++i] && data[i] !== "n") {
      let right = new TreeNode(data[i]);
      parent.right = right;
      q.push(right);
    }
  }
  return root;
}

/**
 * Build a height-balanced binary search tree from the given sorted array
 *
 * For example:
 * Input:
 * [1, 2, 3, 4, 5, 6, 7]
 *
 * Returns:
 *       4
 *     /   \
 *    2     6
 *   / \   / \
 *  1   3 5   7
 *
 * @param {number[]} nums - a sorted number array
 * @return {TreeNode} - the binary search tree built from nums
 */
var buildBSTFromSortedArray = function (nums) {
  var builder = function (start, end) {
    if (start > end) {
      return null;
    }
    var mid = Math.floor((start + end) / 2);
    return new TreeNode(
      nums[mid],
      builder(start, mid - 1),
      builder(mid + 1, end)
    );
  };
  return builder(0, nums.length - 1);
};


exports.TreeNode = TreeNode;
exports.printTree = printTree;
exports.buildTree = buildTree;
exports.buildBSTFromSortedArray = buildBSTFromSortedArray;
