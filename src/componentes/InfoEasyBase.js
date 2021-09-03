import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import '../css/ImagenFondo.css';
import ebconfig from '../ebconfig'
import Productos from './Productos.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
 

function InfoEasy(props){
    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();
    const mounted = async() => {
      const ebData = await db("INFONOBORRAR").return().where({"info":props.name}).one();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])

    if(props.tipo=="txt"){
        return(
        <EasybaseProvider ebconfig={ebconfig}>
            <p className={props.class}>{easybaseData.links}</p>
        </EasybaseProvider>
        );
    }
    else if(props.tipo=="img"){
        return(
            <EasybaseProvider ebconfig={ebconfig}>
                <img src={easybaseData.img}></img>
            </EasybaseProvider>
        );
    }
    else{
        return(
            null
        );
    }
}
    


export default InfoEasy;