class MinHeap {
    constructor() {
        this.heap = []
    }
    
    push(val, node) {
        this.heap.push({val, node})
        this.heap.sort((a, b) => a.val - b.val)
    }
    
    pop() {
        return this.heap.shift()
    }
    
    isEmpty() {
        return this.heap.length === 0
    }
}

var mergeKLists = function(lists) {
    let heap = new MinHeap()
    
    for (let list of lists) {
        if (list) heap.push(list.val, list)
    }
    
    let dummy = new ListNode(0)
    let curr = dummy
    
    while (!heap.isEmpty()) {
        let {val, node} = heap.pop()
        curr.next = node
        curr = curr.next
        
        if (node.next) heap.push(node.next.val, node.next)
    }
    
    return dummy.next
}