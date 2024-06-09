class Solution(object):
    def findPermutationDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """

        hashmap  = {}
        for i in range(0,len(s)):
            hashmap[s[i]] = i

        print(hashmap) 
        store = 0
        for i in range(0,len(t)):
            if t[i] in hashmap:
                value  = hashmap[t[i]]
                store = store + abs(i-value)

        return store        
