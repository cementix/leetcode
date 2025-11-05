var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const n = s.length
    if (k > n) k = n

    let curr = 0

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) curr++
    }

    let ans = curr

    for (let i = k; i < n; i++) {
        if (vowels.has(s[i - k])) curr--
        if (vowels.has(s[i])) curr++
        if (curr > ans) ans = curr
        if (ans === k) return k
    }

    return ans
};