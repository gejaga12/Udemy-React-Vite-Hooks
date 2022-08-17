// import { Fragment } from "react";
// SIN IMPORTAR EL FRAGMENTO UTILIZO <> </> QUE SIMULA UN FRAGMENTO

import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);
  return (
    <>
      {/* <code>{JSON.stringify(nuevoMsj)}</code> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string
  };

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: '123456',
    name: 'Este es mi nombre'
}