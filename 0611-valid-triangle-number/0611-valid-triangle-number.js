/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => a - b)
    let n = nums.length
    let count = 0;

    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i
                j--
            } else {
                i++
            }
        }
    }

    return count
};