var longestSubarray = function(nums) {
    let l = 0
    let r = 0
    let max = 0
    let zeros = 0

    while (r < nums.length) {
        if (nums[r] === 0) zeros++

        while (zeros > 1) {
            if (nums[l] === 0) zeros--
            l++
        }

        if (r - l > max) max = r - l

        r++
    }

    return max    
};