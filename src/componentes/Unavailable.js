import React from 'react'
import { Col } from 'react-bootstrap'
import '../css/Unavailable.css'
import Whatsapp from "../assets/Whatsapp.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";

const Unavailable = () => {
    return (
        <div className="wrapperUnavailable">
            <h1 className="Texto">
            Sabemos que estas emocionado por ver la pagina, nosotros estamos emocionados por que la veas,
            estara disponible muy pronto!
            </h1>
            <h2>Te invitamos a que veas nuestras redes sociales</h2>
           
            <a href="https://www.google.com">
                    <img className="iconSocialIndiv" src={Whatsapp} alt=""></img>
                </a>
                <a href="https://www.google.com">
                    <img className="iconSocialIndiv" src={Facebook} alt=""></img>
                </a>
                <a href="https://www.google.com">
                    <img className="iconSocialIndiv" src={Twitter} alt=""></img>
                </a>
                <a href="https://www.google.com">
                    <img className="iconSocialIndiv" src={Instagram} alt=""></img>
                </a>

            <div class="loader"></div>
        </div>
    )
}

export default Unavailable

