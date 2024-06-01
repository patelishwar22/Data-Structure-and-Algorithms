/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      const ss = s.split('').sort();
        const tt = t.split('').sort();

        // Check if the sorted arrays are equal
        return ss.join('') === tt.join('');
};