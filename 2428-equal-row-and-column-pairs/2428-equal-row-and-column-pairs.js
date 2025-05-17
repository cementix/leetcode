/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const hash = {}
    let count = 0

    for (const row of grid) {
        const string = row.join(',')
        hash[string] = (hash[string] || 0) + 1
    }

    for (let col = 0; col < grid.length; col++) {
        const colArr = []
        for (let row = 0; row < grid.length; row++) {
            colArr.push(grid[row][col])
        }
        
        const string = colArr.join(',')
        if (hash[string]) {
            count += hash[string]
        }
    }


    return count
};