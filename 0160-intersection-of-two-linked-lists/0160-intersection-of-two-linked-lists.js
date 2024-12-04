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
    const nodes = new Set()

    let a = headA
    let b = headB

    while (a !== null) {
        if (nodes.has(a)) {
            return a
        } else {
            nodes.add(a)
            a = a.next
        }
    }

    while (b !== null) {
        if (nodes.has(b)) {
            return b
        } else {
            nodes.add(b)
            b = b.next
        }
    }

    return null
};