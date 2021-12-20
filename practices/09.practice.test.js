function groupBy(collection, it) {
   const groupByResponse = {}
  
  const TYPE_OF_IT = {
    function: (el) => it(el),
    string: (el) => el[it]
  }
  
  const result = TYPE_OF_IT[typeof it]
  let value = null

  collection.forEach(x =>{
    value = result(x)
    if ( !groupByResponse[value] ) groupByResponse[value] = [x]
    else groupByResponse[value] = groupByResponse[value] = [...groupByResponse[value], x]
  })


  return groupByResponse;
}

const testing = [
  {
    input: ["one", "two", "three"],
    property: "length",
    want: { 3: ["one", "two"], 5: ["three"] },
  },
  {
    input: [6.1, 4.2, 6.3],
    property: Math.floor,
    want: { 6: [6.1, 6.3], 4: [4.2] },
  },
  {
    input: [{ age: 23 }, { age: 24 }],
    property: "age",
    want: { 23: [{ age: 23 }], 24: [{ age: 24 }] },
  },
  {
    input: [1397639141184, 1363223700000],
    property: (timestamp) => new Date(timestamp).getFullYear(),
    want: { 2013: [1363223700000], 2014: [1397639141184] },
  },
  {
    input: [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    property: "rating",
    want: {
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    },
  },
];

describe("AdventJs", () => {
  describe("Dia 9", () => {
    testing.forEach(({ input, property, want }) => {
      test(`${want}`, () => {
        expect(groupBy(input, property)).toEqual(want);
      });
    });
  });
});
