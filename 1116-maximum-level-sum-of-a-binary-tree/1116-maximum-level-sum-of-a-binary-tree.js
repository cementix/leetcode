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
var maxLevelSum = function (root) {
    if (!root) return 0
    
    const q = [root]
    const res = { lvl: 1, max: root.val }
    let currLvl = 0

    while (q.length) {
        let qLen = q.length
        let curr = 0
        currLvl++
        

        for (let i = 0; i < qLen; i++) {
            let node = q.shift()

            if (node) {
                curr += node.val
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
        }

        if (curr > res.max) {
            res.max = curr
            res.lvl = currLvl
        }
    }

    return res.lvl
};
