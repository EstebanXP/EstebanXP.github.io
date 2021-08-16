import React, { Fragment } from "react";
import "../assets/ejemploFondo1.jpg";
import { useLocation } from "react-router";
import "../css/Producto.css";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import left from "../assets/back.png";
import { Link } from "react-router-dom";

function Producto(props) {
  const location = useLocation();
  return (
    <div>
      <img className="backgroundImagenProd" src= {location.state.imagen}></img>
      <div
        className="Producto"
      >
        <div className="algoBien">
          <Link to="/productos">
            <img src={left} className="left-arrowProducto" alt="" />
          </Link>
          <h1 className="top">
            Producto:
          </h1>
        </div>
        
        <div className="ColumnasProd"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            
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
    </div>
    
  );
}

export default Producto;
