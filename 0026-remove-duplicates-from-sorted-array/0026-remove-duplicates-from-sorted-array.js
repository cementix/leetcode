var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Edge case: if array is empty, return 0
    
    let i = 0; // Slow pointer to track the position of the unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { // When we find a new unique element
            i++; // Move the slow pointer
            nums[i] = nums[j]; // Place the unique element at position i
        }
    }

    return i + 1; // i is the index, so length will be i + 1
};
