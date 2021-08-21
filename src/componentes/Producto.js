import React, { Fragment } from "react";
import "../assets/ejemploFondo1.jpg";
import { useLocation } from "react-router";
import "../css/Producto.css";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import left from "../assets/back.png";
import { Link } from "react-router-dom";
import useWindowDimensions from "./funcionVentana";
import { render } from "@testing-library/react";
import documento from "../documents/prueba.pdf";


function Producto() {
  const { height, width } = useWindowDimensions();
  if(width<500){
    return(
      <ProductosSmall></ProductosSmall>
    )
  }else if(Math.abs(width-height)<400){
    return(
      <ProductosSquare/>
    );
  }
  else{
    return(
      <ProductosBig/>
    )
  }
  
}

function ProductosBig(){
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      <img className="backgroundImagenProd" src= {location.state.imagen} alt=""></img>
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
        
        <div className="ColumnasProd" style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            
          }}>
          <div className="columnaImagen" id="ContenedorTexto">
            <img src={location.state.imagen} className="imagen" alt=""></img>
          </div>
          <div className="columnaDatos">
            <h1 className="titulo">{location.state.titulo}</h1>
            <p className="descripcionCompleta">{location.state.dCompleta}</p>
            <a href={location.state.pdfLink} download="documento">Hola mundo</a>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

function ProductosSmall(){
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      <img className="backgroundImagenProd" src= {location.state.imagen} alt=""></img>
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
        
        <div className="ColumnasProd">
          <div className="columnaImagen" id="ContenedorTexto">
            <img src={location.state.imagen} className="imagenSmall" alt=""></img>
          </div>
          <div className="columnaDatos">
            <h1 className="titulo">{location.state.titulo}</h1>
            <p className="descripcionCompletaSmall">{location.state.dCompleta}</p>
            <a href={location.state.pdfLink} download="documento">Hola mundo</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

function ProductosSquare(){
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      <img className="backgroundImagenSquare" src= {location.state.imagen} alt=""></img>
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
        
        <div className="ColumnasProd">
          <div className="columnaImagen" id="ContenedorTexto">
            <img src={location.state.imagen} className="imagenSmall" alt=""></img>
          </div>
          <div className="columnaDatos">
            <h1 className="tituloSquare">{location.state.titulo}</h1>
            <p className="descripcionCompletaSquare">{location.state.dCompleta}</p>
            <a href={location.state.pdfLink} download="documento">Hola mundo</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}


export default Producto;
