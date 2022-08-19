import { CounterApp } from "../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pruebas en <CounterApp />", () => {

  const initialValue = 0;

  test("Debe hacer match con el snapshot ", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100 ", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy(); 
  });

  // test('Debe incremetar con el +1 ', () => {
  //   render(<CounterApp value={initialValue} />);
  //   fireEvent.click( screen.getByText('+1'))
  //   expect(screen.getByText('0')).toBeTruthy();
  // })
  
  // test('Debe incremetar con el -1 ', () => {
  //   render(<CounterApp value={initialValue} />);
  //   fireEvent.click( screen.getByText('-1'))
  //   expect(screen.getByText('-1')).toBeTruthy();
  // })
  
  test('debe de funcionar el botón de reset', () => {
        
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect( screen.getByText( 0 ) ).toBeTruthy();
5
});



});
