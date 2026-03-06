/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1
    
    const res = [1, 2]

    for (let i = 3; i <= n; i++) {
        const x = res[res.length - 1]
        const y = res[res.length - 2]

        res.push(x + y)
    }

    return res[res.length - 1]
};