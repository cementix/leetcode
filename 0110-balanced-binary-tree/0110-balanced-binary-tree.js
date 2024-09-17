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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const checkBalance = (node) => {
        if (node === null) return {height: 0, balanced: true}
        
        const left = checkBalance(node.left)
        const right = checkBalance(node.right)
        
        const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
        
        return {height: Math.max(left.height, right.height) + 1, balanced}
    }
    
    return checkBalance(root).balanced
};
