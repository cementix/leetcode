/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head

    let length = 0
    let curr = head

    while (curr) {
        length++
        curr = curr.next
    }

    k = k % length;
    if (k === 0) return head;

    let steps = length - k;
    let fast = head

    while (steps > 1) {
        fast = fast.next
        steps--
    }

    let temp = fast.next
    fast.next = null

    if (temp) {
        curr = temp
        while (curr.next) {
            curr = curr.next
        }
        curr.next = head
    }

    return temp || head
};