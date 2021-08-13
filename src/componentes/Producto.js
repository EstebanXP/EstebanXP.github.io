import React, { Fragment } from "react";
import '../assets/ejemploFondo1.jpg';

const Producto = (props) => {
  return (
    <div className="Producto">
      <h1>Este es uno de los productos que manejamos: </h1>
     <h1>{props.titulo}</h1> 
      <p>{props.descripcion}</p>
      <p>Tiene un precio de: {props.precio} pesos el kilo al mayoreo</p>
    </div>
  );
};

export default Producto;
