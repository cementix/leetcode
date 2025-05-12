/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0

    for (const num of nums) {
        total += num
    }
    
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === total - leftSum - nums[i]) {
            return i
        }

        leftSum += nums[i]
    }

    return -1
};