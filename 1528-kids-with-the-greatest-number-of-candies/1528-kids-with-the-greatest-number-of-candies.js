/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies)
    let result = []
    candies.forEach((candi) => {
    let val = candi + extraCandies
    if(val >= max){
        result.push(true)
    }else{
        result.push(false)
    }
})
return result
};