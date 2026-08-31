class Solution {
    calPoints(operations) {
        const stack = [];

        for (let op of operations) {
            if (op === '+'){
                stack.push(stack.at(-1) + stack.at(-2));
            } else if (op === 'D') {
                stack.push(2 * stack.at(-1));
            }
            else if (op === 'C') {
                stack.pop();
            }
            else {
                stack.push(Number(op));
            }
        }
        return stack.reduce((acc, cur) => acc + cur, 0);
    }
}
