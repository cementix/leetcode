/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0
    if (x === 1) return 1

    for (let i = 0; i <= x; i++) {
        if (i * i > x) return i - 1
    }
};