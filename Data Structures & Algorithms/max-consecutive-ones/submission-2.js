class Solution {
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max_streak = 0;
        
        for(let i = 0; i <= nums.length; i++){
            if(nums[i] === 1){
                count += 1;
                continue;
                
            }
            max_streak = Math.max(max_streak, count);
            count = 0; 
        }
        return max_streak;
    }
}
