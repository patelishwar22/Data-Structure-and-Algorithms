/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function(nums) {
//     let n = nums.length
//     let count = 0
//     for(let i = 0; i < n ; i++){
//      for(let j = i + 1; j < n; j++){
//         if(nums[i] === nums[j]){
//             count++
//         }
//      }   
//      return count
//     }
// };
var numIdenticalPairs = function(nums) {
   let size = nums.length;
     let  goodpair=0;
   for(let i =0  ;i < size ;i++){
       for(let j=i+1 ; j <size;j++){
            if(nums[i] === nums[j]) 
            goodpair++;
       }
   }
   return goodpair;
};
