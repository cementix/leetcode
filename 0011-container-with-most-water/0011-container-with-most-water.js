var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let max = 0

    while (l < r) {
        const h = Math.min(height[l], height[r])
        const area = h * (r - l)
        max = Math.max(max, area)

        if (height[l] < height[r]) l++
        else r--
    }

    return max
};