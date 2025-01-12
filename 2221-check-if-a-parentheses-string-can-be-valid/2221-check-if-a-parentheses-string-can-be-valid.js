/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    const lockedStack = []
    const unlockedStack = []

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            unlockedStack.push(i)
        } else if (s[i] === '(') {
            lockedStack.push(i)
        } else {
            if (lockedStack.length !== 0) {
                lockedStack.pop()
            } else if (unlockedStack.length !== 0) {
                unlockedStack.pop()
            } else {
                return false
            }
        }
    }

    while (lockedStack.length !== 0 && unlockedStack.length !== 0 && lockedStack[lockedStack.length - 1] < unlockedStack[unlockedStack.length - 1]) {
        lockedStack.pop()
        unlockedStack.pop()
    }

    if (lockedStack.length > 0) {
        return false
    }

    return unlockedStack.length % 2 === 0 ? true : false
};