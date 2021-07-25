import "./css/App.css";
import "./css/ImagenFondo.css";
import "./css/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Poupup from "./componentes/PopupChat";
import Vista from "./componentes/Vista";
//import fruta from "./assets/ejemploFondo.jpg";
import ImagenFondo from "./componentes/ImagenFondo";
import FooterPage from "./componentes/Footer";
//import { Fragment } from "react";
import Body from "./componentes/Body";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    
      <Router>
        <div className="App">
          {/* Aqui empieza el jsx, no borrar el div de "App" pq sino no jala*/}
          <div>
            <header className="App-header">
              <Navbar />
              <ImagenFondo />
            </header>
          </div>
          <div className="App-Body">
            <Body />
            <Poupup />
          </div>

          <FooterPage />
          {/* Aqui termina el jsx, no borrar el div de justo abajo pq sino no jala*/}
          <Vista />
        </div>
      </Router>
  );
}

export default App;
