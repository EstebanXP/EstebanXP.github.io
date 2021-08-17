import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import "../css/productos.css";
import Body from './Body.js';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import CarouselProductos from './CarouselProductos'; 
import useWindowDimensions from './funcionVentana';


export default function Productos() {

    const [easybaseData, setEasybaseData] = useState([]);
    const { height, width } = useWindowDimensions();
    //Este es el hook que agarra la altura y anchura, lo cale con la funcion dimensiones, si la necesitas 
    //en otro componente nomas importa el useWindowDimensions y ya lo puedes jalar con los hooks tambien 
    const { db } = useEasybase();

    var dimensiones = ()=>{
      console.log(height + "AAAAAAA"+ width); 
    }

    const mounted = async() => {
      const ebData = await db("PRODUCTOS").return().all();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return (
      <Container className="ContenedorPorductosCar">
        <div className="productosTitle">
          <h2>PRODUCTOS</h2>
        </div>
          <CarouselProductos show={4}>
            {easybaseData.map(ele => 
              <div className="ContainerProductos">
                  <img alt="" className="imgProductos" src={ele.thumbnail} />
                <h4 className="TituloProductosComp">{ele.titulo}</h4>
                <div className="pruebaContainer">
                  <p className="prueba">{ele.descripcion}</p>
                </div>
                <Link to={{
                  pathname: "/producto",
                  state : {
                    titulo : ele.titulo,
                    descripcion : ele.descripcion,
                    imagen : ele.thumbnail,
                    dCompleta: ele.desccompleta
                  }
                }}>
                  <Button  className="botonProductoVermas" >VER MÁS...</Button>
                </Link>

              </div>
            )}
          </CarouselProductos> 
        <Body />
      </Container>
    )
  }