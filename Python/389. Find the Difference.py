'''
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.
'''

class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        ret = 0
        
        for i in range(0, len(s)):
            ret += ord(t[i]) - ord(s[i])
            
        return chr(ret + ord(t[len(t)-1]))

    
'''
Using XOR:

class Solution(object):
    def findTheDifference(self, s, t):
        return chr(reduce(operator.xor, map(ord, s + t)))

Using collections.Counter():

class Solution(object):
    def findTheDifference(self, s, t):
        return list((collections.Counter(t) - collections.Counter(s)))[0]

A 2-liner here using sorted():

class Solution(object):
    def findTheDifference(self, s, t):
        s, t = sorted(s), sorted(t)
        return t[-1] if s == t[:-1] else [x[1] for x in zip(s, t) if x[0] != x[1]][0]
'''