var asteroidCollision = function (asteroids) {
    const stack = []

    for (const curr of asteroids) {
        let alive = true

        while (alive && curr < 0 && stack.length && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1]

            if (top < -curr) {
                stack.pop()
            } else if (top === -curr) {
                stack.pop()
                alive = false  
            } else {
                alive = false
            }
        }

        if (alive) {
            stack.push(curr)
        }
    }

    return stack
};