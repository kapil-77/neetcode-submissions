class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const matching = {
            '(':')',
            '{':'}',
            '[':']'
        }

        const result = [];

        for(let char of s) {
            if(char in matching) {
                result.push(char);
            } else {
                const popped = result.pop();
                if(matching[popped] !== char) {
                    return false;
                }
            }
        }
        return result.length === 0;
    }
}
