import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import '../css/ImagenFondo.css';
import fruta from '../assets/ejemploFondo.jpg';
import fruta1 from '../assets/ejemploFondo1.jpg';
import fruta2 from '../assets/ejemploFondo2.jpg';
import ebconfig from '../ebconfig'
import Easybase from './Easybase';
import { EasybaseProvider, useEasybase } from 'easybase-react';


class ImagenFondo extends React.Component{
    render(){
        return(
            <EasybaseProvider ebconfig={ebconfig}>
                <Carousel fade className="carrousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={fruta2}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={fruta1}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={fruta}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Easybase></Easybase>
            </EasybaseProvider>
        );
    }
}

export default ImagenFondo;