import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Whatsapp from "../assets/Whatsapp.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";

function FooterPage(){
  const location = useLocation();
    if (location.pathname === '/' || location.pathname === '/productos'){
        return <Elsewhere></Elsewhere> ;
    }
    else{
        return null ;
    }
};

function Elsewhere(){
  return (
    <Container fluid className="footer">
      <div>
        <Container fluid>
          <Row>
            <Col xs={2} sm={2} md={1} lg={1}>
              <Link to='/productos'>
                <p className="leftColFoot">Productos </p>
              </Link>
            </Col>
            <Col></Col>
            <Col>
              <h1 className="logoFooter">LOGO</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="iconSocial">
        <a href="https://www.google.com">
          <img className="iconSocialIndiv" src={Whatsapp} alt=""></img>
        </a>
        <a href="https://www.google.com">
          <img className="iconSocialIndiv" src={Facebook} alt=""></img>
        </a>
        <a href="https://www.google.com">
          <img className="iconSocialIndiv" src={Twitter} alt=""></img>
        </a>
        <a href="https://www.google.com">
          <img className="iconSocialIndiv" src={Instagram} alt=""></img>
        </a>
      </div>
    </Container>
  );
}


export default FooterPage;
