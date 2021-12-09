const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  // ¡Tú puedes!
  const regalos = letter.split(" ");
  const regalosFiltrados = regalos.filter(
    (item) => item !== "" && !item.includes("_")
  );
  regalosFiltrados;

  let listaRegalos = {};
  regalosFiltrados.forEach(
    (el) => (listaRegalos[el] = (listaRegalos[el] || 0) + 1)
  );

  return listaRegalos;
}

describe("AdventJs", () => {
  test("Día 2", () => {
    const want = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    };

    expect(listGifts(carta)).toEqual(want);
  });
});
