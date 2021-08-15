import React, { Fragment } from "react";
import "../assets/ejemploFondo1.jpg";
import { useLocation } from "react-router";
import "../css/Producto.css";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import left from "../assets/left.png";
import { Link } from "react-router-dom";

function Producto(props) {
  const location = useLocation();
  return (
    <div
      className="Producto"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + location.state.imagen
        })`,
      }}
    >
      <h1 className="top">
        {" "}
        <Link to="/productos">
          <img src={left} className="left-arrowProducto" alt="" />
        </Link>
        Producto:{" "}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 40,
        }}
      >
        <div className="columnaImagen">
          <img src={location.state.imagen} className="imagen" alt=""></img>
        </div>
        <div className="columnaDatos">
          <h1 className="titulo">{location.state.titulo}</h1>
          <p className="miniDesc">descripcion: {location.state.descripcion} </p>
          <p className="descripcionCompleta">{location.state.dCompleta}</p>
        </div>
      </div>
    </div>
  );
}

export default Producto;
