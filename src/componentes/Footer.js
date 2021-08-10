import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Whatsapp from '../assets/Whatsapp.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram  from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';

const FooterPage = () => {
  return (
    <Container fluid className="footer">
      <div>
        <Container fluid>
          <Row>
              <Col xs={2} sm={2} md={1} lg={1}>
                <p className="leftColFoot">Productos </p> 
                <p className="leftColFoot">Contacto</p>
              </Col>
              <Col>

              </Col>
              <Col>
                <h1 className="logoFooter">LOGO</h1>
              </Col>
          </Row>
        </Container>
      </div>
      <div class="iconSocial">
        <img className="iconSocialIndiv" src={Whatsapp}></img>
        <img className="iconSocialIndiv" src={Facebook}></img>
        <img className="iconSocialIndiv" src={Twitter}></img>
        <img className="iconSocialIndiv" src={Instagram}></img>
      </div>
    </Container>
  );
}

export default FooterPage;