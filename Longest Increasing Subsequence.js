/**
    Given an unsorted array of integers, find the length of longest increasing subsequence.

    For example,
    Given [10, 9, 2, 5, 3, 7, 101, 18],
    The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

    Your algorithm should run in O(n2) complexity.

    Follow up: Could you improve it to O(n log n) time complexity?
 **/


//DP
//时间 O(N^2) 空间 O(N)

/*
// There's a typical DP solution with O(N^2) Time and O(N) space 
// DP[i] means the result ends at i
// So for dp[i], dp[i] is max(dp[j]+1), for all j < i and nums[j] < nums[i]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length;
    
    if(len === 0){
        return 0;
    }
    
    var dp = new Array(len).fill(1);
    var res = 1;
    
    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    
    return res;
};

//Patient Sort
//时间 O(NlogN) 空间 O(N)

/*
在1,3,5,2,8,4,6这个例子中，当到6时，我们一共可以有四种
(1)不同长度
(2)且保证该升序序列在同长度升序序列中末尾最小
的升序序列

1
1,2
1,3,4
1,3,5,6
这些序列都是未来有可能成为最长序列的候选人。这样，每来一个新的数，我们便按照以下规则更新这些序列

如果nums[i]比所有序列的末尾都大，或等于最大末尾，说明有一个新的不同长度序列产生，我们把最长的序列复制一个，并加上这个nums[i]。
如果nums[i]比所有序列的末尾都小，说明长度为1的序列可以更新了，更新为这个更小的末尾。
如果在中间，则更新那个末尾数字刚刚大于等于自己的那个序列，说明那个长度的序列可以更新了。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    
    var len = 0;
    var tails = [];
    tails[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < tails[0]){
            tails[0] = nums[i];
        } else if(nums[i] > tails[tails.length - 1]){
            tails.push(nums[i]);
            len++;
        } else {
            var x = binarySearch(tails, 0, len, nums[i]);
            tails[x] = nums[i];
        }
    }
    return len + 1;
};

function binarySearch(tails, min, max, target){
    while(min <= max){
        var mid = min + Math.floor((max - min)/2);
        if(tails[mid] === target){
            return mid;
        } else if(tails[mid] < target){
            min = mid + 1;
        } else if(tails[mid] > target){
            max = mid - 1;
        }
    }
    return min;
}
