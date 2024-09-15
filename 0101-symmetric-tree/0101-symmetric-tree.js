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
var isSymmetric = function(root) {
    if (!root) return false;
    
        const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;

        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };

    return isMirror(root.left, root.right);
};