/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodes = []
    
    let a = headA
    let b = headB
    
    while (a !== null) {
        if (nodes.includes(a)) {
            return a
        } else {
            nodes.push(a)
            a = a.next
        }
    }
    
    while (b !== null) {
        if (nodes.includes(b)) {
            return b
        } else {
            nodes.push(b)
            b = b.next
        }
    }
    
    return null
};