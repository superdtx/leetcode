'''
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
'''

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = 0
        index = 0
        roman_numberal_map = (('M',  1000),
                             ('CM', 900),
                             ('D',  500),
                             ('CD', 400),
                             ('C',  100),
                             ('XC', 90),
                             ('L',  50),
                             ('XL', 40),
                             ('X',  10),
                             ('IX', 9),
                             ('V',  5),
                             ('IV', 4),
                             ('I',  1))
        for numeral, integer in roman_numberal_map:
            while s[index : index + len(numeral)] == numeral:
                result += integer
                index += len(numeral)
        return result
        
        
                     
