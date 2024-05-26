/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = []
       words.forEach((w,i) => {
        if(w.includes(x)){
            arr.push(i)
        }
       })
            return arr
};