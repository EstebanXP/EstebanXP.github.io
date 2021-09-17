import React, { Fragment } from "react";
import "../css/Body.css";
import Virgilio from '../assets/VIRGILIO.png';
import Ronnie from '../assets/RONNIE.png';
import InfoEasy from "./InfoEasyBase";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const BodyChico = () => {
  return (
    <div className="Cuerpo">
      <div className="borderBody"></div>
      <InfoEasy tipo="txt" name="TituloParrafoProductos" class="tituloBody"></InfoEasy>
      <InfoEasy tipo="txt" name="ParrafoProductos" class="textoBody"></InfoEasy>

      
    </div>
  );
};

export default BodyChico;
