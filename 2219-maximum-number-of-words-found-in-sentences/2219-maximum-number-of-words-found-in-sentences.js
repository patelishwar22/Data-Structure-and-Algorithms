/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    for(let i = 0; i < sentences.length; i++){
    let split = sentences[i].split(" ")
    if(max < split.length){
       max = split.length
    }
    }
        return max



};