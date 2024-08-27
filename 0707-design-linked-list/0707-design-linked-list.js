class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new ListNode(val)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new ListNode(val)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    if (index < 0 || index > this.length) return;
    
    const newNode = new ListNode(val);
    let prev = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }
    
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;
    
    if (index === 0) {
        this.head = this.head.next;
        if (this.length === 1) {
            this.tail = null;
        }
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        if (current.next === this.tail) {
            this.tail = current;
        }
        
        current.next = current.next.next;
    }
    
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */