/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0

    let count = 0

    function from(node, sum) {
        if (!node) return
        sum += node.val
        if (sum === targetSum) count++
        from(node.left, sum)
        from(node.right, sum)
    }

    function dfs(node) {
        if (!node) return
        from (node, 0)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return count
};