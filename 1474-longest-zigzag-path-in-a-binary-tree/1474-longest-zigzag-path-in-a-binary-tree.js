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
 * @return {number}
 */
var longestZigZag = function (root) {
    let maxLen = 0

    function dfs(node) {
        if (!node) return [-1, -1]

        const [leftL, leftR] = dfs(node.left)
        const [rightL, rightR] = dfs(node.right)

        const goLeft = leftR + 1
        const goRight = rightL + 1

        maxLen = Math.max(maxLen, goLeft, goRight)

        return [goLeft, goRight]
    }

    dfs(root)

    return maxLen
};