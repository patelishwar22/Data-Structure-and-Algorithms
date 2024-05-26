/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let n = words.length
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j  = i + 1; j < n; j++){
            let str1 = words[i]
            let str2 = words[j]
            if(str2.startsWith(str1) && str2.endsWith(str1)){
                count++
            }
        }
    }
    return count
};