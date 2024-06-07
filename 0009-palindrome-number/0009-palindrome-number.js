/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let pali = x.toString()
    .split('')
    .reverse()
    .join('')
    let normal = x.toString()
   return (pali === normal)
};