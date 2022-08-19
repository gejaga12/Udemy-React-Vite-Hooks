describe('Pruebas en <DemoComponent />', () => {

    test("Esta prueba no debe de fallar", () => {
        // 1. Inicializacion
        const msj = "Hola Mundo";
        // 2. Estimulo
        const msj2 = msj.trim();
        // 3. Observar el comportamiento esperado
        //   expect(msj).toBe(msj2);
        expect(msj).toBe(msj2);
      });

})


