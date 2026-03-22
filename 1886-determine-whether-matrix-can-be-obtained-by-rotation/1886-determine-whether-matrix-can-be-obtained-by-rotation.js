/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    const same = (a, b) => JSON.stringify(a) === JSON.stringify(b)

    const rotate = m => {
        const n = m.length
        const res = Array.from({ length: n }, () => Array(n))

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                res[j][n - 1 - i] = m[i][j]
            }
        }
        return res
    }

    for (let i = 0; i < 4; i++) {
        if (same(mat, target)) return true
        mat = rotate(mat)
    }

    return false
};