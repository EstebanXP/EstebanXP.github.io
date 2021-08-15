import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Whatsapp from "../assets/Whatsapp.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import { useLocation } from 'react-router';


function Navbar(){
  const location = useLocation();
  if(location.pathname == '/producto'){
      return null;
  }
  else{
      return <Always></Always>;
  }
}

function Always(){
  return (
    <div className="topnav">
      <Container>
        <Row>
          <Col className="colNavBar">
            <Link to="/">
              <h5 className="home h5NavBar" >LOGO</h5>
            </Link>
          </Col>
          <Col xs={4} sm={6} md={8} lg={9} className="colNavBar">
            <a href="https://matias.ma/nsfw/">
            
              <img
                className="iconSocialIndivNav"
                src={Whatsapp}
                id="iconoSocial"
                alt=""
              />
            </a>
            <a href="https://matias.ma/nsfw/">
              <img
                className="iconSocialIndivNav"
                src={Facebook}
                id="iconoSocial"
                alt=""
              />
            </a>
            <a href="https://matias.ma/nsfw/">
              <img
                className="iconSocialIndivNav"
                src={Twitter}
                id="iconoSocial"
                alt=""
              ></img>
            </a>
            <a href="https://matias.ma/nsfw/">
              <img
                className="iconSocialIndivNav"
                src={Instagram}
                id="iconoSocial"
                alt=""
              ></img>
            </a>
          </Col>
          <Col className="colNavBar">
            <Link to="/productos">
              <h5 className="productos h5NavBar">PRODUCTOS</h5>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
