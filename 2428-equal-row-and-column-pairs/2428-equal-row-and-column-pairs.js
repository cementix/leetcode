var equalPairs = function (grid) {
    const map = {}
    let total = 0

    for (const row of grid) {
        let key = ''
        for (const val of row) {
            key += val + ','
        }
        map[key] = (map[key] || 0) + 1
    }

    for (let c = 0; c < grid[0].length; c++) {
        let colKey = ''
        for (let r = 0; r < grid.length; r++) {
            colKey += grid[r][c] + ','
        }

        if (map[colKey]) {
            total += map[colKey]
        }
    }

    return total
}