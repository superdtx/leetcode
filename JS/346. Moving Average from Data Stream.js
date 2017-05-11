/**
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

For example,
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
**/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.array = [];
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    
    this.array.push(val);
    
    if(this.array.length > this.size){
        this.sum = this.sum - this.array.shift();
    }
    
    this.sum = this.sum + val;

    return this.sum/this.array.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */
