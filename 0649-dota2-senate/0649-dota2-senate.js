/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const qR = []
    const qD = []
    const n = senate.length

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') qR.push(i)
        else qD.push(i)
    }


    while (qR.length && qD.length) {
        const r = qR.shift()
        const d = qD.shift()

        if (r < d) {
            qR.push(r + n)
        } else {
            qD.push(d + n)
        }
    }

    return qR.length ? 'Radiant' : 'Dire'

};