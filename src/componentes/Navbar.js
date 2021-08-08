import React from 'react';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Navbar extends React.Component{
    render(){
        return(
            <div className="topnav">
                <Container>
                    <Row>
                        <Col className="colNavBar">
                            <Link to="/">
                                <h5 className="home h5NavBar">HOME</h5>
                            </Link>
                        </Col>
                        <Col xs={2} sm={6} md={8} lg={9} className="colNavBar">
                            <h5 className="h5NavBar">hola</h5>
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
}

export default Navbar;