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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let a = input_line[0];
        let b = input_line[1];
        let obj = new Solution();
        if(obj.isAnagram(a, b))
            console.log("YES");
        else
            console.log("NO");
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b)
    {
      // If lengths of the two strings are not equal, they can't be anagrams.
        if (a.length !== b.length) {
            return false;
        }

        // Create frequency maps for both strings.
        const countA = {};
        const countB = {};

        // Count the frequency of each character in string a.
        for (let char of a) {
            countA[char] = (countA[char] || 0) + 1;
        }

        // Count the frequency of each character in string b.
        for (let char of b) {
            countB[char] = (countB[char] || 0) + 1;
        }

        // Compare frequency maps of both strings.
        for (let char in countA) {
            if (countA[char] !== countB[char]) {
                return false;
            }
        }

        // If all characters have the same frequency, they are anagrams.
        return true;
    }
    
}