function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  const containString = (string) => letter.indexOf(string);

  // Obtenemos las posiciones
  const open = containString("(");
  const close = containString(")");
  const bracket =
    containString("[") === -1 ? containString("]") : containString("[");
  const lock =
    containString("{") === -1 ? containString("}") : containString("{");

  //Validamos
  const isMissed = open === -1 || close === -1;
  const isEmpty = containString("()") >= 0 ? true : false;
  const isBracketBetween = open < bracket && close > bracket;
  const isLockBetween = open < lock && close > lock;

  if (isMissed || isEmpty || isBracketBetween || isLockBetween) return false;

  return true;
}

const testing = [
  {
    input: "bici coche (balón) bici coche peluche",
    want: true,
    title: 'bici coche (balón) bici coche peluche => True'
  },
  {
    input: "(muñeca) consola bici",
    want: true,
    title: "(muñeca) consola bici => True"
  },
  {
    input: "bici coche (balón bici coche",
    want: false,
    title: "bici coche (balón bici coche => False"
  },
  {
    input: "peluche (bici [coche) bici coche balón",
    want: false,
    title: "peluche (bici [coche) bici coche balón => False"
  },
  {
    input: "(peluche {) bici",
    want: false,
    title: "(peluche {) bici => False"
  },
  {
    input: "() bici",
    want: false,
    title: "() bici => False"
  },
];

describe('Adventjs', ()=>{
    describe('Dia 3', () => {
        testing.forEach( x => {
            test(x.title || x.input, () => {
                expect(isValid(x.input)).toBe(x.want)
            })
            
        })
    })
})
