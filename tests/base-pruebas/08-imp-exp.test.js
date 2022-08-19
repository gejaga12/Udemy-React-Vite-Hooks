import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("PRUEBAS EN 08-imp-exp", () => {
  test("getHeroeById DEBE RETORNAR UN HEROE POR ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById DEBE RETORNAR UNDEFINED SI NO EXISTE", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner DEBE REGRESAR HEORES DE DC ", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);
    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroesDC).toEqual(heroesDC.filter((heroe) => heroe.owner === owner));
  });
  
  test("getHeroesByOwner DEBE REGRESAR HEORES DE DC ", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);
    console.log(heroesMarvel);
    expect(heroesMarvel.length).toBe(2);
  });
});
