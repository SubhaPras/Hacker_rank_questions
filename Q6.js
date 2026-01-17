// Find First Occurrence
// Given a sorted array of integers that may contain duplicates, return the index of the first occurrence of a target value or -1 if not found.

// Example

// Input:

// nums = [1, 2, 3, 4, 5]
// target = 3
// Output: 2




function findFirstOccurrence(arr, target) {
    // Write your code here
    
    let left = 0;
    let right = arr.length-1;
    let result = -1

    while (left <= right ){
        let mid = Math.floor((left+right)/2)

        if(target === arr[mid]) result = mid; right = mid-1;
        if(target < arr[mid]) right = mid-1;
        if(target > arr[mid]) left = mid+1
    }
    
    return result

}

console.log(findFirstOccurrence([1, 1,2,2, 3, 4, 5], 2));
