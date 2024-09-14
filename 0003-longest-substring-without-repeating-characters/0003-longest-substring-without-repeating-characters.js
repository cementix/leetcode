var lengthOfLongestSubstring = function(s) {
    let hash = [];
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        if (hash.includes(s[i])) {
            longest = Math.max(longest, hash.length);
            hash = hash.slice(hash.indexOf(s[i]) + 1);
        }
        hash.push(s[i]);
    }

    longest = Math.max(longest, hash.length);

    return longest;
};
