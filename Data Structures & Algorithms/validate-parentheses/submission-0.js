class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');             //opening/closing bracket should be adjacent
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }
        return s === '';
    }
}
