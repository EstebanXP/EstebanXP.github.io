import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import "../css/productos.css";
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {easybaseData.map(ele => 
          <div>
            <img class="imgProductos" src={ele.thumbnail} />
            <h4>{ele.titulo}</h4>
            <p>{ele.descripcion}</p>
          </div>
        )}
      </div>
    )
  }