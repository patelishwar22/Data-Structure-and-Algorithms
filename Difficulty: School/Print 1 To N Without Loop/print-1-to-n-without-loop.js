//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        obj.printNos(n);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @returns { }
*/

class Solution {
  constructor() {
    this.s = ""; // Initialize an empty string to store the numbers.
  }

  printNosRecur(N) {
    if (N === 0) {
      return; // Base case: return when N reaches 0.
    }
    this.printNosRecur(N - 1); // Recursive call to printNosRecur() with N-1.
    this.s += N + " "; // Append N to the string s.
  }

  printNos(N) {
    this.printNosRecur(N); // Call the printNosRecur() function.
    console.log(this.s); // Print the final string s.
  }
}