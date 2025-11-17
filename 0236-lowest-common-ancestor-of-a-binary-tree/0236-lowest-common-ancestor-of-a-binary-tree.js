/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node) {
        if (!node) return false

        const left = dfs(node.left)
        const right = dfs(node.right)

        const curr = node === p || node === q

        if (left && right || curr && right || curr && left) {
            return node
        }

        return left || right || curr
    }

    return dfs(root)
};