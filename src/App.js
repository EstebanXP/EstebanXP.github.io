import "./css/App.css";
import "./css/productos.css";
import "./css/ImagenFondo.css";
import "./css/Footer.css";
import "./css/CarouselProductos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Poupup from "./componentes/PopupChat";
import Vista from "./componentes/Vista";
//import fruta from "./assets/ejemploFondo.jpg";
import ImagenFondo from "./componentes/ImagenFondo";
import FooterPage from "./componentes/Footer";
//import { Fragment } from "react";
import Body from "./componentes/Body";
import { EasybaseProvider, Auth } from 'easybase-react'
import ebconfig from './ebconfig'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Productos from "./componentes/Productos";
import CarouselProductos from "./componentes/CarouselProductos";
import Producto from "./componentes/Producto";


function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Router>
        <div className="App">
          {/* Aqui empieza el jsx, no borrar el div de "App" pq sino no jala*/}
          <div>
            <header className="App-header">
              <Navbar />
              <ImagenFondo/>
            </header>
          </div>
          <div className="App-Body">
            
            <Switch>
              <Route path="/productos" exact component={Productos}></Route>
            </Switch>
            <Switch>
              <Route path="/producto" exact component={Producto}></Route>
            </Switch>
            
            <Poupup />
          </div>
          <FooterPage />
          {/* Aqui termina el jsx, no borrar el div de justo abajo pq sino no jala*/}
        </div>
        
      </Router>
    </EasybaseProvider>
  );
}

export default App;
