/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    let numsSort = nums.sort((a,b) => a-b)
   
    for(let i = 0; i < numsSort.length; i++){
        for(let j = i + 1; j < numsSort.length; j++ )
        if (nums[i] + nums[j] < target) {
        count++;
      }
    }
        return count

};