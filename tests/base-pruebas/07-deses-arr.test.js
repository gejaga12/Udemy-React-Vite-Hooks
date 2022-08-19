import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("PRUEBAS EN 07-DESES-ARR", () => {
  test("Debe retornar un string y un numero ", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");

    expect(letras).toEqual(expect.any(String));
  });
});
