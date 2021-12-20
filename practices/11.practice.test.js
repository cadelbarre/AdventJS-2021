function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    const normal = 12 * times
    let prevValue = 12 * 0.75
    let fidelity = 250

    for (let i = 0; i < times; i++) {
        fidelity += prevValue
        prevValue = prevValue * 0.75
    }

    return (fidelity < normal) ? true : false
}


const testing = [
    {
        input: 3,
        want: false
    },
    {
        input: 24,
        want: true
    },
    {
        input: 100,
        want: true
    }
]

describe('AdventJs', ( ) => {
    describe('Día 11', () => {
        testing.forEach(({input, want}) =>{
            test(`${input} => ${want}`, () => {
                expect(shouldBuyFidelity(input)).toBe(want)
            })
        })
    })
})