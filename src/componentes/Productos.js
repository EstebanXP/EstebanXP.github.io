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
      const ebData = await db("PRODUCTOS").return().limit(10).all();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return (
      <Container>
          <CarouselProductos show={4}>
            {easybaseData.map(ele => 
              <div className="ContainerProductos">
                
                  <img class="imgProductos" src={ele.thumbnail} />
                
                <h4>{ele.titulo}</h4>
                <p>{ele.descripcion}</p>
                <Button className="botonProductoVermas">VER MÁS...</Button>
              </div>
            )}
          </CarouselProductos> 
        <Body />
      </Container>
    )
  }