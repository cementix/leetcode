var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Edge case: empty array
    if (nums.length <= 2) return nums.length; // No need to process if there are 2 or fewer elements

    let i = 1; // Slow pointer starts at 1, since the first two elements can stay by default

    for (let j = 2; j < nums.length; j++) {
        // Compare the current element with the element at `i-1`
        if (nums[j] !== nums[i - 1]) {
            i++; // Move the slow pointer
            nums[i] = nums[j]; // Update the next valid position
        }
    }

    return i + 1; // Return the new length
};
