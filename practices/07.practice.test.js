function contains(store, product) {
  const values = Object.values(store);

  const iterableObject = (valueObject) => {
    if (valueObject.every((x) => typeof x === "string")) return valueObject;

    const newValueObject = valueObject.map((x) => {
      if (typeof x !== "string") return iterableObject(Object.values(x));
      else return x;
    });
    return newValueObject.flat();
  };

  let total = [];
  values.forEach((x) => {
    const response = iterableObject(Object.values(x));
    total.push(response);
  });

  if (total.flat().includes(product)) return true;

  // ¡Y no olvides compartir tu solución en redes!
  return false;
}

const testing = [
  {
    input: {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta", // <- ¡Está aquí!
        },
      },
    },
    want: true,
    product: 'camiseta'
  },
  {
    input: {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    },
    want: false,
    product: 'gameboy'
  }
];

describe('AdventJs', () => {
    describe('Dia 7', () => {
        testing.forEach( ({input, want, product}) => {
            test(`${product} => ${want}`, () => {
                expect(contains(input, product)).toBe(want)
            })
        })
    })
})
