var removeDuplicates = function(nums) {
    let left = nums[0]
    let k = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== left) {
            nums[k] = nums[i]
            k++
            left = nums[i]
        }
    }
    
    return k
};