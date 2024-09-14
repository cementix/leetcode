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
var inorderTraversal = function(root) {
    const result = []
    
    const traversal = (node) => {
        if (!node) {
            return null
        }
        
        traversal(node.left)
        result.push(node.val)
        traversal(node.right)
    }
    
    traversal(root)
    
    return result
};
