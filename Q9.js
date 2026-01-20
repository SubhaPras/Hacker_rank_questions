// Min-Tracking Stack Implementation
// Implement a stack that supports push, pop, top, and getMin operations in O(1) time, where getMin returns the minimum element.

// Example

// Input

// n = 10
// operations = ['push 2', 'push 0', 'push 3', 'push 0', 'getMin', 'pop', 'getMin', 'pop', 'top', 'getMin']
// Output

// [0,0,0,0]


function processCouponStackOperations(operations) {

    let stack = []
    let minStack = []
    let result = []

    for(let op of operations){
        let parts = op.split(" ")
        let command = parts[0]
        
        if(command === "push"){
            let num = Number(parts[1])
            stack.push(num)
            if(minStack.length == 0){
                minStack.push(num)
            }else {
                minStack.push(Math.min(num, minStack[minStack.length-1]))
            }
        }

        if(command === "pop"){
           if(stack.length > 0) {stack.pop()
            minStack.pop()}
        }

        if(command === "top"){
            if(stack.length > 0){
                result.push(stack[stack.length-1])
            }
        }

        if(command === "getMin"){
            if(minStack.length > 0){
                result.push(minStack[minStack.length-1])
            }
        }
    } 

    return result
}