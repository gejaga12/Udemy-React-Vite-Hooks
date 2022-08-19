import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("PRUEBAS EN FIRSTAPP", () => {
//   test("DEBE HACER MATCH CON EL SNAPSHOT ", () => {
//     const title = "Hola soy Geraldo";
//     const { container } = render(<FirstApp title={title} />);
//     console.log(container);
//     expect(container).toMatchSnapshot();
//   }); 

  test(" DEBE MOSTRAR EL TITULO EN UN H1 ", () => {
    const title = "Hola soy Geraldo";
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    console.log(h1.innerHTML);
  });
});
