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
var insertGreatestCommonDivisors = function(head) {
    let first = head.next
    let second = head
    
    
    const gcd = (a, b) => {
        let x = a
        let y = b
        
        while (y !== 0) {
            let temp = y
            y = x % y
            x = temp
        }
        
        return x
    }
    
    while (first !== null) {
        const newNode = new ListNode(gcd(second.val, first.val))
        second.next = newNode
        newNode.next = first
        
        second = first
        first = first.next
    }
    
    return head
};