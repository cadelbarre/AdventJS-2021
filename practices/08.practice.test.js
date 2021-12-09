function maxProfit(prices) {

  let buy = {
    index: 0,
    value: 0,
  };

  for (let i = 0; i <= prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      buy.index = i;
      buy.value = prices[i];
      i = prices.length;
    }
  }

  const slide = prices.slice(buy.index + 1);
  const sell = Math.max(...slide);

  return buy.value ===  0 ? -1 : sell - buy.value 
}

const testing = [
  {
    input: [39, 18, 29, 25, 34, 32, 5],
    want: 16,
  },
  {
    input: [10, 20, 30, 40, 50, 60, 70],
    want: 60,
  },
  {
    input: [18, 15, 12, 11, 9, 7],
    want: -1,
  },
  {
    input: [3, 3, 3, 3, 3],
    want: -1,
  },
];

describe("AdventJs", () => {
  describe("Día 8", () => {
    testing.forEach(({ input, want }) => {
      test(`${input} => ${want}`, () => {
        expect(maxProfit(input)).toBe(want);
      });
    });
  });
});
