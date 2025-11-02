
var compress = function(chars) {
    let write = 0
    let read = 0

    while (read < chars.length) {
        const char = chars[read]
        let count = 0

        while (read < chars.length && chars[read] === char) {
            read++
            count++
        }

        chars[write] = char
        write++

        if (count > 1) {
            for (const c of String(count)) {
                chars[write] = c
                write++
            }
        }
    }

    return write
};