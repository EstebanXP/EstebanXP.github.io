import React, { Fragment } from "react";
import "../css/Body.css";
import Virgilio from '../assets/VIRGILIO.png';
import Ronnie from '../assets/RONNIE.png';
import InfoEasy from "./InfoEasyBase";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Body = () => {
  return (
    <div className="Cuerpo">
      <div className="borderBody"></div>
      <InfoEasy tipo="txt" name="TituloParrafoProductos" class="tituloBody"></InfoEasy>
      <Container className="ContainerBody">
        <Row>
          <Col>
            <img src={Virgilio} class="virgilio"/>
            <p className="mascotaName">Virgilio</p>
          </Col>
          <Col lg={8} md={8} sm={8} xl={8} xxl={8}>
            <InfoEasy tipo="txt" name="ParrafoProductos" class="textoBody"></InfoEasy>
          </Col>
          <Col>
          <img src={Ronnie} class="ronnie"/>
          <p className="mascotaName">Ronnie</p>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Body;
