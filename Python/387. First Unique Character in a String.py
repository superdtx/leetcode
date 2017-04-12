'''

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
