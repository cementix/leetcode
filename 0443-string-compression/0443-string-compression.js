/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let counter = 1
        let symbol = chars[read]

        while (chars[read] === chars[read + 1]) {
            counter++
            read++
        }

        read++

        if (counter > 1) {
            chars[write] = symbol
            write++
            for (let c of String(counter)) {
                chars[write] = c;
                write++;
            }
        } else {
            chars[write] = symbol
            write++
        }
    }

    return write
};