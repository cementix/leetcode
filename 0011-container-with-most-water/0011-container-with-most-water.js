/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = Math.min(height[left], height[right]) * (right - left)

    while (left !== right) {
        if (height[right] > height[left]) {
            left++
        } else {
            right--
        }

        const curr = Math.min(height[left], height[right]) * (right - left)

        if (curr > max) {
            max = curr
        }
    }

    return max
};