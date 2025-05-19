/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = []

    for (const ast of asteroids) {
        let destroyed = false

        while (
            stack.length > 0
            && stack[stack.length - 1] > 0
            && ast < 0
        ) {
            const top = stack[stack.length - 1]

            if (Math.abs(ast) > top) {
                stack.pop()
                continue
            } else if (Math.abs(ast) === top) {
                stack.pop()
                destroyed = true
                break
            } else {
                destroyed = true
                break
            }
        }

        if (!destroyed) {
            stack.push(ast)
        }

    }

    return stack
};