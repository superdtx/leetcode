'''
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
'''

class Solution(object):
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        ret = 0
        for i in range(len(s)):
            ret = ret*26 + ord(s[i]) - ord('A') + 1
        
        return ret
        
class Solution(object):
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        return reduce(lambda a, b: 26*a+ord(b)-ord('A')+1, s, 0)        
