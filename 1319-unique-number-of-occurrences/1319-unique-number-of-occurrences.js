var uniqueOccurrences = function(arr) {
    const hash = {}

    for (const x of arr) {
        hash[x] = (hash[x] || 0) + 1
    }

    const set = new Set()

    for (const key in hash) {
        if (set.has(hash[key])) return false
        set.add(hash[key])
    }

    return true
};