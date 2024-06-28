/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0
    for(i of nums){
        if(i % 3 !== 0){
            count++
        }
    }
    return count
};