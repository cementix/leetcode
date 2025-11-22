var rotate = function(nums, k) {
    const n = nums.length
    k = k % n

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
}

function reverse(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
}
