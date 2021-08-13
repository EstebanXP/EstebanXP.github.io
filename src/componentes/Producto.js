import React, { Fragment } from "react";
import '../assets/ejemploFondo1.jpg';
import { useLocation } from "react-router";

function Producto(props){
  const location = useLocation();
  console.log(location);
  return (
    <div className="Producto">
      <h1>Este es uno de los productos que manejamos: </h1>
     <h1>{location.state.titulo}</h1> 
      <p>{props.descripcion}</p>
      <p>descripcion: {location.state.descripcion} </p>
      <img src = {location.state.imagen}></img>
    </div>
  );
};

export default Producto;
