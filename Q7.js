// Maximum Number of Non-Overlapping Intervals
// Given an array of intervals where each interval has a start and end time, return the maximum number of non-overlapping intervals.

// Examples
// Example 1

// Input:

// meetings = [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output:

// 3


function maximizeNonOverlappingMeetings(meetings) {
    meetings.sort((a, b) => a[1] - b[1])

    let count = 0;
    let lastEnd = -Infinity
    
    for(let [start, end] of meetings){
        if(start >= lastEnd){
            count+=1;
            lastEnd = end;
        }
    }

    return count

}

console.log(maximizeNonOverlappingMeetings([[1, 2], [2, 3], [3, 4], [1, 3]]));
