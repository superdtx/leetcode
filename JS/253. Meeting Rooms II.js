/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.
*/

/**
To understand why it works, first let’s define two events:
Meeting Starts
Meeting Ends

Next, we acknowledge three facts:
The numbers of the intervals give chronological orders
When an ending event occurs, there must be a starting event has happened before that, where “happen before” is defined by the chronological
orders given by the intervals
Meetings that started which haven’t ended yet have to be put into different meeting rooms, and the number of rooms needed is the number of
such meetings

So, what this algorithm works as follows:

for example, we have meetings that span along time as follows:

|_____|
      |______|
|________|
        |_______|
Then, the start time array and end time array after sorting appear like follows:

||    ||
     |   |   |  |
Initially, endsItr points to the first end event, and we move i which is the start event pointer. As we examine the start events, we’ll
find the first two start events happen before the end event that endsItr points to, so we need two rooms (we magically created two rooms),
as shown by the variable rooms. Then, as i points to the third start event, we’ll find that this event happens after the end event pointed
by endsItr, then we increment endsItr so that it points to the next end event. What happens here can be thought of as one of the two 
previous meetings ended, and we moved the newly started meeting into that vacant room, thus we don’t need to increment rooms at this time
and move both of the pointers forward.
Next, because endsItr moves to the next end event, we’ll find that the start event pointed by i happens before the end event pointed by 
endsItr. Thus, now we have 4 meetings started but only one ended, so we need one more room. And it goes on as this.
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
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    var lens = intervals.length;
    
    if(lens === 0){
        return 0;
    }
    
    var start = [], end = [];
    
    intervals.forEach(function(interval){
        start.push(interval.start);
        end.push(interval.end);
    });
    
    start.sort(function(a, b){
        return a - b;
    });
    
    end.sort(function(a, b){
        return a - b;
    });
    
    var rooms = 0;
    var endpoint = 0;

    for(var i = 0; i < lens; i++){
        if(start[i] < end[endpoint]){
            rooms ++;
        } else {
            endpoint++;
        }
    }
    return rooms;
};
