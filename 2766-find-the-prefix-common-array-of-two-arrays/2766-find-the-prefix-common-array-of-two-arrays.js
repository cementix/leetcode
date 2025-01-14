/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let counter = 0;
    const res = []
    const setA = new Set()
    const setB = new Set()

    for (let i = 0; i < A.length; i++) {
        if (setB.has(A[i])) {
            counter++
        } else {
            setA.add(A[i])
        }

        if (setA.has(B[i])) {
            counter++
        } else {
            setB.add(B[i])
        }

        res.push(counter)
    }

    return res
};