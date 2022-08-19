import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("PRUEBAS 11 ASYNC AWAIT", () => {
  test("DEBE DEVOLVER UNA IMAGEN ", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
