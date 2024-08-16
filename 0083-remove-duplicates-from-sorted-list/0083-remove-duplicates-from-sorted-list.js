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
var deleteDuplicates = function(head) {
    let hash = []
    let fast = head
    let slow = null
    
	    while(fast !== null) {
            if (hash.includes(fast.val)) {
                slow.next = fast.next
            } else {
                hash.push(fast.val)
                slow = fast
            }
            
            fast = fast.next
	    }
    
    return head
};