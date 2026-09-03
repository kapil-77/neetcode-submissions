class Solution {
    majorityElement(nums) {
       nums.sort();
       return nums[Math.floor(nums.length / 2)];
    }
}
