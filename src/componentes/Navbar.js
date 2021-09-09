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
import Amazon from "../assets/Amazon.png";
import InfoEasy from "./InfoEasyBase";
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";

function Navbar(){
  const location = useLocation();
  if(location.pathname === '/producto' || location.pathname==='/unavailable'){
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
          <Col  className="colNavBar">
            <Link to="/">
              
              <InfoEasy tipo="img" name="LogoNav" class="logoNav"></InfoEasy>
            </Link>
          </Col>
          <Col xs={3} sm={6} className="colNavBar">
            <a href={LinksE("LinkWhatsapp")}>
              <img
                className="iconSocialIndivNav"
                src={Whatsapp}
                id="iconoSocial"
                alt=""
              />
            </a>
            <a href={LinksE("LinkFacebook")}>
              <img
                className="iconSocialIndivNav"
                src={Facebook}
                id="iconoSocial"
                alt=""
              />
            </a>
            <a href={LinksE("LinkTwitter")}>
              <img
                className="iconSocialIndivNav"
                src={Twitter}
                id="iconoSocial"
                alt=""
              ></img>
            </a>
            <a href={LinksE("LinkInstagram")}>
              <img
                className="iconSocialIndivNav"
                src={Instagram}
                id="iconoSocial"
                alt=""
              ></img>
            </a>
            <a href={LinksE("LinkAmazon")}>
              <img className="iconSocialIndivNav" src={Amazon} alt=""></img>
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

function LinksE(name){
  const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();
    const mounted = async() => {
      const ebData = await db("INFONOBORRAR").return().where({"info":name}).one();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])

    return(
      easybaseData.links
    )
}

export default Navbar;
