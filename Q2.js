// Find the Smallest Missing Positive Integer
// Given an unsorted array of integers, find the smallest positive integer not present in the array 

const findSmallestPositiveInt = (arr) => {
    let set = new Set(arr);

    let i = 1
    while(true){
        if(!set.has(i)){
            return i
        }
        i+=1
    }
    return false
}

console.log(findSmallestPositiveInt([3, 4, -1, 1]));
