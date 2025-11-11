var pairSum = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    slow = reverseList(slow)

    let curr = head
    let max = curr.val + slow.val

    while (curr && slow) {
        max = Math.max(max, curr.val + slow.val)
        curr = curr.next
        slow = slow.next
    }

    return max
    
};

var reverseList = function(head) {
    let prev = null
    let curr = head

    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};