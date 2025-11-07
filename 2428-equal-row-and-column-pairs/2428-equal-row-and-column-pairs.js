/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const hash = {}
    let count = 0

    for (const x of grid) {
        let row = ''

        for (const num of x) {
            row += num+','
        }

        hash[row] = (hash[row] || 0) + 1
    }

    for (let i = 0; i < grid[0].length; i++) {
        let col = ''
        for (let j = 0; j < grid.length; j++) {
            col += grid[j][i]+','
        }
        console.log(col)

        if (hash[col] && hash[col] > 0) {
            count += hash[col]
            hash[col]
        }
    }

    console.log(hash)

    return count
};