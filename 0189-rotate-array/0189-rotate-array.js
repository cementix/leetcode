var rotate = function (nums, k) {
    k = k % nums.length
    
    const reverse = (l, r) => {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }

    nums.reverse()

    reverse(0, k - 1)
    reverse(k, nums.length - 1)
};