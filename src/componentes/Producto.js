import React, { Fragment } from "react";
import "../assets/ejemploFondo1.jpg";
import { useLocation } from "react-router";
import "../css/Producto.css";
import Navbar from "./Navbar";
import FooterPage from "./Footer";



function Producto(props) {
  const location = useLocation();   
  return (
    <div className="Producto">
      <Navbar />
      <h1 className="top">Producto: </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 40,
        }}
      >
        <div className="columnaImagen">
          <img
            src={location.state.imagen}
            className="imagen"
            alt=""
          ></img>
        </div>
        <div className="columnaDatos">
          <h1 className="titulo">{location.state.titulo}</h1>
          <p className="miniDesc">descripcion: {location.state.descripcion} </p>
          <p className="descripcionCompleta">{location.state.dCompleta}</p>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default Producto;
