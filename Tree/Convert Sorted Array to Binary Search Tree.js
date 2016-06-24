/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return build(nums, 0, nums.length);
};

function build(nums, start, end){
    
    if(start >= end){
        return null;
    }
    
    var mid = Math.floor((start+end)/2);
    var node = new TreeNode(nums[mid]);
    node.left = build(nums, start, mid);
    node.right = build(nums, mid+1, end);

    return node;
}
