function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
   const currentDate= new Date('Dec 25, 2021')
  const substraer = currentDate.getTime() - date.getTime()
  const days = Math.ceil(substraer/1000 / 60 / 60 / 24)
  return days
}

const testing =[
    {
        title: 'Dec 1, 2021 //-> 24',
        input: new Date('Dec 1, 2021'),
        want: 24
    },
    {
        title: 'Dec 24, 2021 00:00:01 //-> 1',
        input: new Date('Dec 24, 2021 00:00:01'),
        want: 1
    },
    {
        title: 'Dec 24, 2021 23:59:59 //-> 1',
        input: new Date('Dec 24, 2021 23:59:59'),
        want: 1
    },
    {
        title: "Dec 25, 2021 //-> 0",
        input: new Date("Dec 25, 2021"),
        want: 0
    },
    {
        title: "Dec 26, 2021 //-> -1",
        input: new Date('Dec 26, 2021'),
        want: -1
    },
    {
        title: "Dec 31, 2021 //-> -6",
        input: new Date('Dec 31, 2021'),
        want: -6
    },
    {
        title: "Jan 1, 2022 00:00:01 //-> -7",
        input: new Date('Jan 1, 2022 00:00:01'),
        want: -7
    },
    {
        title: "Jan 1, 2022 23:59:59 //-> -7",
        input: new Date('Jan 1, 2022 23:59:59'),
        want: -7
    }

]

describe('AdventJs', () => {
    describe(("Dia 5"), () => {
        testing.forEach( ({title, input, want}) => {
            test(title, () => {
                expect(daysToXmas(input)).toBe(want)
            })
        })
    })
})