var swapNodes = function(head, k) {
    let first = null;
    let second = null;
    let temp = null;
    
    let curr = head;
    let length = 0;
    
    while (curr !== null) {
        length++;
        
        if (length === k) {
            first = curr;
        }
        
        curr = curr.next;
    }
    
    curr = head;
    
    for (let i = 1; i <= length; i++) {
        if (i === length - k + 1) {
            second = curr;
            break;
        }
        curr = curr.next;
    }
    
    temp = first.val;
    first.val = second.val;
    second.val = temp;
    
    return head;
};