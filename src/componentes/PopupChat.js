import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import Icono from "../assets/IconoChat.png";
import IconoAbierto from "../assets/IconoAbierto.png";


const Poupup = () => {

  const [stateImage, setStateImage ] = useState(true);

  const [toSend, setToSend] = useState({
    correo: "",
    subject: "",
    message: "",
    name: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );
    for (let i in toSend) {
      toSend[i] = "";
    }
  };

  const validarEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    if (validarEmail(toSend.correo) === true) {
      send(
        "service_shg556m",
        "template_0vnvgms",
        toSend,
        "user_vR3QsGpeKhWlUGqEAdTHq"
      )
        .then(() => {
          Swal.fire(
            "Correo enviado!",
            "Nos contactaremos lo mas pronto posible",
            "success"
          );
          handleReset();
          cerrarChat();
        })
        .catch((err) => {
          console.log("FAILED...", err);
          Swal.fire(
            "Uuuuups!",
            "Hubo un error, intentalo mas tarde :(",
            "error"
          );
          handleReset();
          cerrarChat();
        });
    } else {
      Swal.fire(
        "Uuuuups!",
        "Tal vez deberías revisar tu dirección de correo :(",
        "error"
      );
    }
  };

  function cerrarChat() {
    document.getElementById("chatbox").style.display = "none";
  }

  function abrirChat() {
    document.getElementById("chatbox").style.display = "block";
  }

  function holaMundo() {
    if (stateImage===true) {
      abrirChat();
      cambiarEstado();
    } else {
      cerrarChat();
      cambiarEstado();
    }
  }

  function cambiarEstado(){
    handleImageClick();
    
  }

  function handleImageClick() {
    setStateImage(!stateImage);
    console.log(stateImage)
  }


  return (
    <div className="container">
      {/* <button
        id="bChat"
        className="btn btn-info btn-chat"
        type="button"
        onClick={holaMundo}
      >

      </button>
*/}
      <img
        src={ stateImage ? Icono : IconoAbierto}
        className="iconoChat"
        alt=""
        onClick={holaMundo}
        ></img>

      <div className="chatbox" id="chatbox">
        <div className="header">
          <h2 id="header">Contactanos</h2>
        </div>
        <form onSubmit={enviarEmail} className="form-container" id="form">
          <input
            type="email"
            required
            placeholder="Correo electronico"
            className="field"
            name="correo"
            value={toSend.correo}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            required
            placeholder="Motivo de contacto"
            className="field"
            name="subject"
            value={toSend.subject}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            required
            placeholder="Nombre completo"
            className="field"
            name="name"
            value={toSend.name}
            onChange={handleChange}
          ></input>

          <textarea
            type="text"
            placeholder="Escribe tus dudas"
            name="message"
            required
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-outline-success">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Poupup;
