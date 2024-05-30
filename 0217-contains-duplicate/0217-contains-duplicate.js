/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let num = nums.sort((a,b) => a-b)
   for(let i = 0; i < num.length; i++){
        if(num[i] === num[i + 1]){
            return true
        }
   }
   return false
};

