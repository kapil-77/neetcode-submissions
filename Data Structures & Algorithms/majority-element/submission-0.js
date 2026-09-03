class Solution {
    majorityElement(nums) {
        let count = new Map();
        let result = 0, maxCount = 0;

        for(let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
            if(count.get(num) > maxCount) {
                result = num;
                maxCount = count.get(num);
            }
        }
        return result;
    }
}
