/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const result = []
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i]
        
        if (char === "+" || char === "-" || char === "*") {
            const left = diffWaysToCompute(expression.substring(0, i))
            const right = diffWaysToCompute(expression.substring(i + 1, expression.length))
            
            for (const l of left) {
                for (const r of right) {
                    if (char === "+") result.push(l + r)
                    if (char === "-") result.push(l - r)
                    if (char === "*") result.push(l * r)
                }
            }
        }
    }
    
    if (result.length === 0) {
        result.push(parseInt(expression))
    }
    
    return result
};