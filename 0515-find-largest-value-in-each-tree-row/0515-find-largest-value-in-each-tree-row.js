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
var largestValues = function(root) {
    if (!root) return []

    const res = []
    const queue = [root]

    while (queue.length > 0) {
        let max = queue[0].val;
        const length = queue.length;

        for (let i = 0; i < length; i++) {
            node = queue.shift()
            max = Math.max(max, node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        res.push(max)
    }


    return res
};