/**
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
**/

//https://discuss.leetcode.com/topic/47469/java-nlogn-solution-with-explanation/31?page=2

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
    if(envelopes.length === 0){
        return 0;
    }
    
    envelopes.sort(function(a, b){
        if(a[0] === b[0]){
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    var lengths = new Array(envelopes.length).fill(0);
    var len = 0;
    
    for(var e of envelopes){
        var i = binarySearchSmallestLength(lengths, 0, len, e[1]);
        lengths[i] = e[1];

        if (i === len) {
            len++;
        }
    }

    return len;
};

var binarySearchSmallestLength = function(lengths, start, end, target){
    while(start + 1 < end){
        var mid = start + Math.floor((end - start)/2);
        if(lengths[mid] === target){
            return mid;
        } else if (lengths[mid] < target){
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if (lengths[start] >= target){
        return start;
    } else{
        return end;
    }
};
