/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    
    let maxWater = 0
    
    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const width = right - left
        
        const currentWater = minHeight * width
        
        maxWater = Math.max(maxWater, currentWater)
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return maxWater
};