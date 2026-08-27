class Solution {
    maxProfit(prices) {
        let left = 0, right = 1, maxProfit = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                left = right;     //assign right to left since it's smaller
            }
            right++;              //then increment right to next index
        }
        return maxProfit;
    }
}
