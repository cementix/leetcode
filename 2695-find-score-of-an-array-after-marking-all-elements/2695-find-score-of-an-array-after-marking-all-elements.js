class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val, index) {
        this.heap.push([val, index]);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (
                this.heap[parentIndex][0] < this.heap[index][0] || // Parent has smaller number
                (this.heap[parentIndex][0] === this.heap[index][0] && this.heap[parentIndex][1] < this.heap[index][1]) // Equal number, but parent has smaller index
            ) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (
            left < this.heap.length &&
            (this.heap[left][0] < this.heap[smallest][0] || // Left has smaller number
                (this.heap[left][0] === this.heap[smallest][0] && this.heap[left][1] < this.heap[smallest][1])) // Equal number, but left has smaller index
        ) {
            smallest = left;
        }
        if (
            right < this.heap.length &&
            (this.heap[right][0] < this.heap[smallest][0] || // Right has smaller number
                (this.heap[right][0] === this.heap[smallest][0] && this.heap[right][1] < this.heap[smallest][1])) // Equal number, but right has smaller index
        ) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}

var findScore = function(nums) {
    let score = 0;
    let marked = new Set();
    let minHeap = new MinHeap();

    // Populate the heap with elements and their indices
    for (let i = 0; i < nums.length; i++) {
        minHeap.insert(nums[i], i);
    }

    // Process the heap
    while (minHeap.heap.length > 0) {
        let [num, index] = minHeap.extractMin();

        // Skip already marked indices
        if (marked.has(index)) continue;

        // Add to score
        score += num;
        marked.add(index);

        // Mark neighbors
        if (index > 0) marked.add(index - 1);
        if (index < nums.length - 1) marked.add(index + 1);
    }

    return score;
};
