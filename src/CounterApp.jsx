import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    // console.log('render');
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // console.log(counter);
    // setCounter((c) => c + 1); //para aumentar
    setCounter(counter + 1); // para aumentar
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div>
        <h1>CounterApp</h1>
        <p>{counter}</p>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
