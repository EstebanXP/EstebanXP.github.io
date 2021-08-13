import React, { Fragment } from "react";
import '../assets/ejemploFondo1.jpg';

const Producto = (props) => {
  return (
    <div className="Body">
      Hola mundo
      <p></p>
      {props.name}
      {props.pepe}
    </div>
  );
};

export default Producto;
