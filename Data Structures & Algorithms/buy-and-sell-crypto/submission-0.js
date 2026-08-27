class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for ( let i = 0; i < prices.length; i++) {
            let buy = prices[i];
            for ( let j = i + 1; j < prices.length; j++) {
                let sell = prices[j];
                maxProfit = Math.max(maxProfit, sell - buy);
            }
        }
        return maxProfit;
    }
}
