import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("PRUEBAS EN 09", () => {
  test("DEBE DE RETORNAR UN HEROE ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("DEBE DE RETORNAR UN ERROR ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe(`No se pudo encontrar el héroe con id: ${id}`)
      done();  //para cortar la prueba
    });
  });
});
