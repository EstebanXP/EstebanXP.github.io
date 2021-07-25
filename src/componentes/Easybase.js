import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

export default function Easybase() {
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
            <a href={ele.amazon_link}><img src={ele.demo_image} /></a>
            <h4>{ele.product_name}</h4>
            <p>${ele.price}</p>
            <button onClick={() => {}}>⭐ Save for later ⭐</button>
          </div>
        )}
      </div>
    )
  }