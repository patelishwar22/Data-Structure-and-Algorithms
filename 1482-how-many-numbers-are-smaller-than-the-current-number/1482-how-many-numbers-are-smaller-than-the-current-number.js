/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let arr = []
    let count = 0
   for(let i = 0; i < nums.length; i++){
        for(let j = 0 ; j < nums.length; j++){
            if(nums[j] < nums[i] && j != i){
                count++
            }
        }
            arr.push(count)
            count = 0
   } 
        return arr
};
    
   