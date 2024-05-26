/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i]; //Overwrite the next unique element
            k++;
        }
    }
// [1,1,2]
//[0,0,1,1,1,2,2,3,3,4]
    return k;
};