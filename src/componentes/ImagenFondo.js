import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import '../css/ImagenFondo.css';
import fruta from '../assets/ejemploFondo.jpg';
import fruta1 from '../assets/ejemploFondo1.jpg';
import fruta2 from '../assets/ejemploFondo2.jpg';
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useLocation } from 'react-router';



function ImagenFondo(){
    const location = useLocation();
    if (location.pathname == '/'){
        return <Home></Home>;
    }
    else if(location.pathname == '/productos'){
        return <Prod/>;
    }
    else{
        return null;
    }
}

function Home(){
    return(
        <EasybaseProvider ebconfig={ebconfig}>
            <div className ="Carrusel bg-image">
                <Carousel fade className="carrousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 imagenCarrusel"
                        src={fruta2}
                        alt="First slide"
                        />
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imagenCarrusel"
                            src={fruta1}
                            alt="Second slide"
                            />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100 imagenCarrusel"
                            src={fruta}
                            alt="Third slide"
                            />
                        <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>

        </EasybaseProvider>
    );
}

function Prod(){
    return(
        <EasybaseProvider ebconfig={ebconfig}>
            <div className ="Carrusel bg-image">
                <Carousel fade className="carrousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 imagenCarruselProd"
                        src={fruta2}
                        alt="First slide"
                        />
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imagenCarrusel"
                            src={fruta1}
                            alt="Second slide"
                            />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100 imagenCarrusel"
                            src={fruta}
                            alt="Third slide"
                            />
                        <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>

        </EasybaseProvider>
    );
}

export default ImagenFondo;