// var productExceptSelf = function(nums) {
//     const n = nums.length
//     const res = Array(n).fill(1)

//     let left = 1
//     for (let i = 0; i < n; i++) {
//         res[i] = left
//         left *= nums[i]
//     }

//     let right = 1
//     for (let i = n - 1; i >= 0; i--) {
//         res[i] *= right
//         right *= nums[i]
//     }

//     return res
// };

var productExceptSelf = function(nums) {
    const n = nums.length
    const left = Array(n).fill(1)
    const right = Array(n).fill(1)
    const res = Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < n; i++) {
        res[i] = left[i] * right[i]
    }

    return res
}