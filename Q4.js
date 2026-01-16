// Check for Non-Identical String Rotation
// Given two strings s1 and s2, return 1 if s2 is a rotation of s1 but not identical to s1, otherwise return 0.

// Example

// Input:

// s1 = abcde
// s2 = cdeab
// Output: True


const checkNonIdenticalStringRotation = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    if(s1 === s2) return false;

    let combined = s1+=s1;

    if(combined.includes(s2)){
        return true
    }

    return false
}

console.log(checkNonIdenticalStringRotation("abcde", "cdeab"));
