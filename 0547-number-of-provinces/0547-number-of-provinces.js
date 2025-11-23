/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    let provinces = 0

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            provinces++

            const stack = [i]
            visited[i] = true

            while (stack.length > 0) {
                const curr = stack.pop()

                for (let j = 0; j < isConnected.length; j++) {
                    if (isConnected[curr][j] === 1 && !visited[j]) {
                        visited[j] = true
                        stack.push(j)
                    }
                }
            }
        }
    }

    return provinces
};