var removeElement = function(nums, val) {
    let i = 0; // Slow pointer to track the position of the non-val elements

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]; // Move the non-val element to the i-th position
            i++;
        }
    }

    return i; // i will be the new length of the array without `val`
};
