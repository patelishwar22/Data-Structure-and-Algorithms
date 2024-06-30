/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   let pref = strs[0]
   let i = 1; 
   while (i < strs.length){
    if(!strs[i].startsWith(pref)){
       pref = pref.slice(0,-1)
    }else{
        i++
    }
   }
   return pref
};