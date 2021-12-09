// const { describe, test, expect } = require('jest')

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]

function contarOvejas (ovejas) {
  // aquí tu magia
  const searchName = (string, search) => string.toLowerCase().includes(search)

  const ovejasFiltradas = ovejas.filter(
    (el) => el.color === 'rojo' && (searchName(el.name, 'n') && searchName(el.name, 'a'))
  )

  return ovejasFiltradas
}

describe('AdventJs', () => {
  test('Dia 1', () => {
    const want = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]
    expect(contarOvejas(ovejas)).toEqual(want)
  })
})
