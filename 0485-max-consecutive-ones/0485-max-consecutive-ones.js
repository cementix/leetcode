/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let k = 0

    while (k < nums.length) {
        let found = false
        let curr = 0
        

        if (nums[k] === 1) {
            found = true
            curr++
            while (nums[k] === nums[k + 1]) {
                curr++
                k++
            } 
        }
        
        max = Math.max(max, curr)
        k++
    }

    return max
};