/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0; // Handle the empty needle case

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true; // Flag to check if the needle matches
        
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false; // Mismatch found
                break; // Exit inner loop
            }
        }
        
        if (match) return i; // Return the starting index if found
    }
    
    return -1; // Return -1 if needle is not found
};
