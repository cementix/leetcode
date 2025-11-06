/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let l = 0
    let r = 0
    let max = 0
    let zeros = 0

    while (r < nums.length) {
        if (nums[r] === 0) zeros++

        while (zeros > k) {
            if (nums[l] === 0) zeros--
            l++
        }
        
        if (r - l + 1 > max) max = r - l + 1

        r++
    }

    return max
};