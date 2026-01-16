// Given a sorted array of distinct integers and a target value, return the index of the target or -1 if not found.

// Example 1

// Input:

// nums = [1, 2, 3, 4, 5]
// target = 3
// Output:

// 2


const findIndex = (arr, target) => {
    let map = new Map;

    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], i)
    }

    return map.get(target)
}

console.log(findIndex([1, 2, 3, 4, 5], 2));



// using BinarySearch

const binarySearch = (arr, target) => {
    let start = 0;
    let last = arr.length-1
    
    while(start <= last){
        let mid = Math.floor(start+last/2)

        if(target < arr[mid]){
            last = mid-1
        }else if(target > arr[mid]){
            start = mid+1
        }
        else if(target == arr[mid]){
            return mid
        }
    }

    return false
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
