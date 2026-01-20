// Validate Properly Nested Brackets
// Given a string, check if all brackets ('()', '{}', '[]') are properly matched and nested. Return 1 if valid, otherwise return 0.

// Example

// Input

// code_snippet = if (a[0] > b[1]) { doSomething(); }
// Output

// 1


const checkNestedBrackets = (str) => {
   let arr = []
   let obj = {
    ")" : "(",
    "}" : "{",
    "]" : "["
   }

   for(let char of str){
    if(char == "(" || char == "{" || char == "["){
        arr.push(char)
    }
    if(char == ")" || char == "}" || char == "]"){
        if(arr.length == 0) return 0;
        let pop = arr.pop()

        if(pop !== obj[char]) return 0

    }
   }

   return (arr.length==0? 1 : 0)
}

console.log(checkNestedBrackets("{{()}}"))