const generateBrackets = (n) => {
    const result = [];

    const backtrack = (current, open, close) => {
        // Base case: length = 2n
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add '<' if we still can
        if (open < n) {
            backtrack(current + "<", open + 1, close);
        }

        // Add '>' only if valid
        if (close < open) {
            backtrack(current + ">", open, close + 1);
        }
    };

    backtrack("", 0, 0);
    return result;
};

console.log(generateBrackets(2));
// [ '<><>', '<<>>' ]
