// Count Number Pairs
// Given a sorted array of positive integers and a target value, count the number of pairs (i, j) where i < j and array[i] + array[j] <= target.

// Example

// Input:

// prices = [1, 2, 3, 4, 5]
// budget = 7
// Output:

// 8


const countAffordablePairs = (arr, target) => {
    let left = 0;
    let right = arr.length-1
    let count = 0

    while(left <= right){
        if(arr[left] + arr[right] <= target){
            count+=(right-left)
            left++
        }else {
            right --
        }
    }

    return count
}

console.log(countAffordablePairs([1,2,3,4,5], 7));
