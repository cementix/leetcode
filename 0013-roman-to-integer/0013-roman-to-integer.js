var romanToInt = function(s) {
    // Map of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next value, we subtract it
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, we add it
            total += currentVal;
        }
    }

    return total;
};
