class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const checkMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(checkMap.has(diff)) return [checkMap.get(diff), i];

            checkMap.set(nums[i], i);
        }
        return [];
    }
}
