/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var len = intervals.length;
    var s = [];
    var e = [];
    
    intervals.forEach(function(elem){
        s.push(elem.start);
        e.push(elem.end);
    });
    
    s.sort(function(a, b){
        return a - b;
    });
    
    e.sort(function(a, b){
        return a - b;
    });
    
    var res = [];
    
    for(var i = 0, j = 0; i < len; i++){
        if(i === len - 1 || s[i + 1] > e[i]){
            res.push(new Interval(s[j], e[i]));
            j = i+1;
        }
    }
    
    return res;
};
