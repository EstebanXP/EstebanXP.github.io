import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import '../css/ImagenFondo.css';
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
 

function InfoEasy(){
    return <Call></Call>
}


function Call(){
    
    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    const mounted = async() => {
      const ebData = await db("INFONOBORRAR").return().one();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return(
        <EasybaseProvider ebconfig={ebconfig}>
            {easybaseData.links}


        </EasybaseProvider>
    );
}

export default InfoEasy;