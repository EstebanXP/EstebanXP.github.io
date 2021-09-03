import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import '../css/ImagenFondo.css';
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useLocation } from 'react-router';
import { useEffect, useState } from "react";
import Error from './Error'; 
import InfoEasy from './InfoEasyBase';

function ImagenFondo(){
    const location = useLocation();
    if (location.pathname == '/' ){
        return <Home></Home>;
    }
    else if(location.pathname == 'proyectofruteria/'){
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
    
    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    const mounted = async() => {
      const ebData = await db("HOME").return().all();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return(
        <EasybaseProvider ebconfig={ebconfig}>
            <div className ="Carrusel bg-image">
                <Carousel   fade prevLabel={false} nextLabel={false} className="carrousel">
                    {easybaseData.map(ele => 
                         <Carousel.Item>
                         <img
                         className="d-block w-100 imagenCarrusel"
                         src={ele.imagen}
                         alt="First slide"
                         />
                         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                         <Carousel.Caption className="captionHome">
                         <h3>{ele.titulo}</h3>
                         </Carousel.Caption>
                     </Carousel.Item>
                    )}
                </Carousel>    
            </div>
            <InfoEasy name={'LinkFacebook'} tipo={"txt"} class="algo"></InfoEasy>

        </EasybaseProvider>
    );
}

function Prod(){
    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    const mounted = async() => {
      const ebData = await db("HOME").return().limit(10).all();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return(
        <EasybaseProvider ebconfig={ebconfig}>
            <div className ="Carrusel bg-image">
                <Carousel prevLabel={false} nextLabel={false} fade className="carrousel">
                    {easybaseData.map(ele => 
                         <Carousel.Item>
                         <img
                         className="d-block w-100 imagenCarruselProd"
                         src={ele.imagen}
                         alt="First slide"
                         />
                         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                         <Carousel.Caption className="captionProd">
                         <h3>{ele.titulo}</h3>
                         </Carousel.Caption>
                     </Carousel.Item>
                    )}
                </Carousel>    
            </div>

        </EasybaseProvider>
    );
}

export default ImagenFondo;