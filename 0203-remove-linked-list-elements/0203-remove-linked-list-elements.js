/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = { next: head };
    let slow = dummy;
    let fast = head;
    
    while (fast !== null) {
        if (fast.val === val) {
            slow.next = fast.next;
        } else {
            slow = fast;
        }
        fast = fast.next;
    }
    
    return dummy.next;
};
