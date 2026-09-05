class Solution {
    missingNumber(nums) {
        let n = nums.length;
        let sum = n * (n + 1)/2;
        let arraySum = 0;

        for(let num of nums) {
            arraySum += num;
        }

        return sum - arraySum;
    }
}
