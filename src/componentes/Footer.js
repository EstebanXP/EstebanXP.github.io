import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Whatsapp from "../assets/Whatsapp.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Amazon from "../assets/Amazon.png";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import InfoEasy from "./InfoEasyBase";
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";

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
            <Col >
              <Link to='/productos' style={{ textDecoration: 'none' }}>
                <p className="leftColFoot">PRODUCTOS </p>
              </Link>
            </Col>
            
            <Col>
              <InfoEasy tipo="img" name="LogoFooter" class="LogoFooter"></InfoEasy>
            </Col>
          </Row>
        </Container>
        <Container className="middleColFoot">
          <InfoEasy tipo="txt" name="Ciudad" class="footerText"></InfoEasy>
          <InfoEasy tipo="txt" name="Direccion" class="footerText"></InfoEasy>
          <InfoEasy tipo="txt" name="Telefono" class="footerText"></InfoEasy>
          <InfoEasy tipo="txt" name="CorreoContacto" class="footerText"></InfoEasy>
        </Container>
      </div>
      <div className="iconSocial">
        <a href={LinksE("LinkWhatsapp")}>
          <img className="iconSocialIndiv" src={Whatsapp} alt=""></img>
        </a>
        <a href={LinksE("LinkFacebook")}>
          <img className="iconSocialIndiv" src={Facebook} alt=""></img>
        </a>
        <a href={LinksE("LinkTwitter")}>
          <img className="iconSocialIndiv" src={Twitter} alt=""></img>
        </a>
        <a href={LinksE("LinkInstagram")}>
          <img className="iconSocialIndiv" src={Instagram} alt=""></img>
        </a>
        <a href={LinksE("LinkAmazon")}>
          <img className="iconSocialIndiv" src={Amazon} alt=""></img>
        </a>
      </div>
    </Container>
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



export default FooterPage;
