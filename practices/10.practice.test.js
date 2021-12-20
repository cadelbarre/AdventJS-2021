function getCoins(change) {
  let newChange = change;
  const coins = [50, 20, 10, 5, 2, 1];
  const response = [...coins].fill(0);
  // const coins = [1, 2, 5, 10, 20, 50]

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= newChange) {
      newChange = newChange - coins[i];
      response[i] = (response[i] || 0) + 1;
      i = -1;
    }
  }

  return response.reverse();
}

const testing = [
  {
    input: 51,
    want: [ 1, 0, 0, 0, 0, 1 ],
  },
  {
    input: 3,
    want: [ 1, 1, 0, 0, 0, 0 ],
  },
  {
    input: 5,
    want: [0, 0, 1, 0, 0, 0],
  },
  {
    input: 16,
    want: [1, 0, 1, 1, 0, 0],
  },
  {
    input: 100,
    want: [0, 0, 0, 0, 0, 2],
  },
];

describe("AdventJs", () => {
  describe("Día 10", () => {
    testing.forEach(({ input, want }) => {
      test(`${input} => ${want}`, () => {
        expect(getCoins(input)).toEqual(want);
      });
    });
  });
});
