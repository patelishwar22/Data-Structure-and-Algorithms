class Solution(object):
    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        def is_palindrome(s, left, right):
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            return True
        
        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                # If removing either left or right character results in a palindrome,
                # then the string can be made a palindrome by removing at most one character.
                return is_palindrome(s, left + 1, right) or is_palindrome(s, left, right - 1)
            left += 1
            right -= 1
        
        return True
