'''
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
'''

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        return sum(max(prices[i+1] - prices[i], 0) for i in range(len(prices) - 1))
        
'''
 If you talk about multiple day, say 3 days, and the price is 3,1,5, and you thought about 3 buy, 5 sell. But actually you will make the most if buy at 1 and sell at 5. If the price is 3,9,5, the best would just do 3->9, and forget about the 5. If 3,4,5, you can say 3->5 is the best, but my code will give you 3->4 and 4->5, which is the same.
'''
