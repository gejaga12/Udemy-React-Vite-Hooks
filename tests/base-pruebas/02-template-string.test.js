import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe("Pruebas en 02-template-string", () => {

  test('getSaludo debe de retornar "Hola Gerardo"', () => {

    const name = "Gerardo";
    const msj = getSaludo(name);
    expect(msj).toBe(`Hola ${name}!!!`);
  });
});
 