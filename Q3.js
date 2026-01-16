// Check Palindrome by Filtering Non-Letters
// Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

// Example

// Input

// code = A1b2B!a
// Output 1

const checkPalindrome = (str) => {
    let str2 = ""
    let revStr2 = ""
    for(let item of str){
        if(item.toLowerCase() !== item.toUpperCase()){
            str2+=item
        }
    }

    for(i = str2.length-1; i >=0; i-- ){
        revStr2+=str2[i]
    }

    if(str2.toLowerCase() === revStr2.toLocaleLowerCase()){
        return 1
    }
    return 0
}

console.log(checkPalindrome("A1b2B!a"));
