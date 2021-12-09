function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let match = null;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        match = [numbers[i], numbers[j]];
        j = numbers.length;
        i = numbers.length;
      }
    }
  }

  return match;
}


const testing = [
    {
        input: [3, 5, 7, 2],
        result: 10,
        want: [3,7]
    },
    {
        input: [-3, -2, 7, -5],
        result: 10,
        want: null
    },
    {
        input: [2, 2, 3, 1],
        result: 4,
        want: [2,2]
    },
    {
        input: [6, 7, 1, 2],
        result: 8,
        want: [6,2]
    },
    {
        input: [0, 2, 2, 3, -1, 1, 5],
        result: 6,
        want: [1,5]
    },
]

describe('AdventJs',() => {
    describe('Día 5', () => {
        testing.forEach( ({input, want, result}) => {
            test(`[${input}]  //-> ${result}`, () => {
                expect(sumPairs(input, result)).toEqual(want)
            })
        })
    })
})