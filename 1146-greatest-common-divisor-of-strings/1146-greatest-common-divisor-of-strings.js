/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""

    let n1 = str1.length, n2 = str2.length

    let base = str1.slice(0, gcd(n1, n2))

    return base
};

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}