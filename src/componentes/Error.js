import React from "react";
import "../css/Error.css";
import robot from "../assets/robot2.png";
import { Col, Row } from "react-bootstrap";

const error = () => {
  return (
    <div className="wrapperError">
      <div className="miniWrapper">
        <h1 className="titulo">
          Lo sentimos, la verdad no tenemos idea de a donde intentabas ingresar :(
        </h1>
        
          <div className="columna2">
           <h2>
              Error 404
           </h2>
           <img src={robot} className="robot" alt=""></img>
          </div>
          
      </div>
    </div>
  );
};

export default error;
