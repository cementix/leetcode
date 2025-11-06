var largestAltitude = function(gain) {
    const n = gain.length
    const prefix = new Array(n + 1).fill(0)

    let max = prefix[0]
    
    for (let i = 1; i < n + 1; i++) {
        prefix[i] = prefix[i - 1] + gain[i - 1]
    }

    for (const num of prefix) {
        max = Math.max(num, max)
    }

    return max
};