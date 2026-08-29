class Solution {
    replaceElements(arr) {
    const result = [];
    let maxRight = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] = maxRight;
        maxRight = Math.max(maxRight, arr[i]);
    }

    return result;
    }
};
