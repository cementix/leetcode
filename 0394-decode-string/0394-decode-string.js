/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    let curr = ''
    let num = 0
    
    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch)
        } else if (ch === '[') {
            stack.push([curr, num])
            curr = ''
            num = 0
        } else if (ch === ']') {
            const [prev, k] = stack.pop()
            curr = prev + curr.repeat(k)
        } else {
            curr += ch
        }
    }

    return curr
};