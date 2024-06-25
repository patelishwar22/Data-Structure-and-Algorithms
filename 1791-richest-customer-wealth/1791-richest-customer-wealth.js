/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
       let max=0;
    for(let i of accounts ){
    let p=  i.reduce((sum,arr)=>sum+arr,0)
          if(p>max){
              max=p;
             
          }
        
    }
      return max
      
};