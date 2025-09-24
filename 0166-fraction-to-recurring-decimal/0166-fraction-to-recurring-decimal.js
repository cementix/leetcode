/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0"

    let res = ""

    if ((numerator < 0) ^ (denominator < 0)) res += "-"

    let n = Math.abs(numerator)
    let d = Math.abs(denominator)

    res += Math.floor(n / d)
    let r = n % d
    if (r === 0) return res

    res += '.'
    const seen = new Map()

    while (r !== 0) {
        if (seen.has(r)) {
            const idx = seen.get(r)
            return res.slice(0, idx) + '(' + res.slice(idx) + ')'
        }
        seen.set(r, res.length)

        r *= 10;
        res += Math.floor(r / d)
        r %= d
    }

    return res
};