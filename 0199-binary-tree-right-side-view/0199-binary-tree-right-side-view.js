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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const q = [root]
    const res = []

    while (q.length) {
        let right = null
        let qLen = q.length

        for (let i = 0; i < qLen; i++) {
            let node = q.shift()
            if (node) {
                right = node
                q.push(node.left)
                q.push(node.right)
            }
        }

        if (right) res.push(right.val)
    }

    return res
};