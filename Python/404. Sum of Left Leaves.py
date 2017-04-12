'''
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def sumOfLeftLeaves(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if(root == None):
            return 0
        
        return self.leftLeaves(root, False)
        
        
    def leftLeaves(self, node, isLeft):
        ret = 0
        
        if(node.left == None and node.right == None):
            if isLeft == True:
                ret += node.val
            return ret
            
        if node.left != None:
            ret += self.leftLeaves(node.left, True)
        if node.right != None:
            ret += self.leftLeaves(node.right, False)
        return ret
        
