/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//       const ss = s.split('').sort();
//         const tt = t.split('').sort();

//         // Check if the sorted arrays are equal
//         return ss.join('') === tt.join('');
// };

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }

    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }

    return true;
};

// Example usage
let string1 = "anagram";
let string2 = "nagaram";
console.log(isAnagram(string1, string2)); // true
