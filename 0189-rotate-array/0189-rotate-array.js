var rotate = function (nums, k) {
    k = k % nums.length
    const temp = []

    for (let i = 0; i < k; i++) {
        temp[i] = nums[nums.length - k + i]
    }

    for (let i = k; i < nums.length; i++) {
        temp[i] = nums[i - k]
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i]
    }
};