/**
 * @param {string} s
 * @return {number}
 */

    var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    if (n === 0) return 0;
    
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < n; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(start, charMap.get(s[end]) + 1);
        }
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;

};