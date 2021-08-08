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
                        <Col>
                            <Link to="/">
                                <h5 className="home">HOME</h5>
                            </Link>
                        </Col>
                        <Col xs={2}>
                            <p>hola</p>
                        </Col>
                        <Col>
                            <Link to="/productos">
                                <h5 className="productos">PRODUCTOS</h5>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        );
    }
}

export default Navbar;