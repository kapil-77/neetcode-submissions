class Solution {
    removeElement(nums, val) {
        let k = 0;

        for (let num of nums) {
            if(num === val) continue;
            nums[k] = num;
            k++;
        }
        return k;
    }
}
