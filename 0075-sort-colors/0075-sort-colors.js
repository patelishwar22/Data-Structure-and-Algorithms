/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n  = nums.length
    for(let i = 0; i < n; i++){
        let j  = i
        while(j > 0 && nums[j -1] > nums[j]){
            let temp = nums[j -1]
            nums[j -1] = nums[j]
            nums[j] = temp
            j--
        }
    }
    return nums
};