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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const q = [root]

    while (q.length) {
        let qLen = q.length

        for (let i = 0; i < qLen; i++) {
            let node = q.shift()
            if (node) {
                if (node.val === val) {
                    return node
                }
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
        }
    }

    return null
};