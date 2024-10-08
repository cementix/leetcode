/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const result = Array(n).fill(1)

    let prefix = 1
    for (let i = 0; i < n; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    let postfix = 1
    for (let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;
        postfix *= nums[i];
    }

    return result
};