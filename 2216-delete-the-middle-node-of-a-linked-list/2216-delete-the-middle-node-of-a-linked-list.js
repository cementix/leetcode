/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head.next === null) {
        return null
    }
    
    let first = head
    let second = head
    let prev = head

    while (second && second.next) {
        prev = first
        first = first.next
        second = second.next.next
    }

    prev.next = first.next
    first.next = null

    return head
};