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

export default function Productos() {

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

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
                <p className="prueba">{ele.descripcion}</p>
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