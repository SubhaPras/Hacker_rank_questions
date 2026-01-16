// Count Elements Greater Than Previous Average

// Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

// Example

// Input

// responseTimes = [100, 200, 150,300]
// Output 2



const CountElePrevAvg = (arr) => {
    let sum = arr[0]
    let count = 0

    for(let i = 1; i < arr.length; i++){
        let average = sum/i;

        if(arr[i] > average){
            count+=1;
        }

        sum+=arr[i]
    }

    return count
}

console.log(CountElePrevAvg([100, 200, 150, 300, 100]))