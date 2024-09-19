class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    pop() {
        if (this.isEmpty()) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (index < this.heap.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

var mergeKLists = function(lists) {
    let heap = new MinHeap();
    
    // Добавляем первые узлы каждого списка в кучу
    for (let list of lists) {
        if (list) heap.push(list);
    }
    
    let dummy = new ListNode(0);
    let curr = dummy;
    
    // Пока куча не пуста
    while (!heap.isEmpty()) {
        let node = heap.pop();  // Извлекаем минимальный элемент
        curr.next = node;       // Добавляем его в результирующий список
        curr = curr.next;
        
        // Если у текущего узла есть следующий узел, добавляем его в кучу
        if (node.next) heap.push(node.next);
    }
    
    return dummy.next;
};
