'''
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
'''

class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        return min([s.find(char) for char in string.ascii_lowercase if s.count(char) == 1] or [-1])
        
        
class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        return min([s.find(char) for char, val in collections.Counter(s).iteritems() if val == 1] or [-1])
