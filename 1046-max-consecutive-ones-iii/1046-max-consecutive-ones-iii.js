/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    if (k >= nums.length) return nums.length
    
    let l = 0
    let r = 1
    let max = 0
    let count = 0

    if (nums[l] === 0) count++

    while (r < nums.length) {
        if (nums[r] === 0) count++
        if (count > k) {
            while (count > k) {
                if (nums[l] === 0) count--
                l++
            }
        }
        max = Math.max(r - l + 1, max)
        r++
    }

    return max
};