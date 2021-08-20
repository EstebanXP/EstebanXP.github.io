import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import Icono from "../assets/IconoChat.png";
import IconoAbierto from "../assets/IconoAbierto.png";

const Poupup = () => {
  const [stateImage, setStateImage] = useState(true);

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
        "service_fw5h9xc",
        "template_hj1woj8",
        toSend,
        "user_aF03oNHJg2rhkwOdjup5R"
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
    if (stateImage === true) {
      abrirChat();
      cambiarEstado();
    } else {
      cerrarChat();
      cambiarEstado();
    }
  }

  function cambiarEstado() {
    handleImageClick();
  }

  function handleImageClick() {
    setStateImage(!stateImage);
    console.log(stateImage);
  }

  return (
    <div className="container">
      
      
        <img
          src={stateImage ? Icono : IconoAbierto}
          className="iconoChat"
          alt=""
          onClick={holaMundo}
        />
      
      

      <div className="chatbox" id="chatbox">
        <div className="header">
          <h2 id="header" className="contactTitlePP">CONTACTO</h2>
        </div>
        <form onSubmit={enviarEmail} className="form-container" id="form">
          <input
            type="email"
            required
            placeholder="Correo electronico"
            className="field textPP"
            name="correo"
            value={toSend.correo}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            required
            placeholder="Motivo"
            className="field textPP"
            name="subject"
            value={toSend.subject}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            required
            placeholder="Nombre completo"
            className="field textPP"
            name="name"
            value={toSend.name}
            onChange={handleChange}
          ></input>

          <textarea
            className="textPP"
            type="text"
            placeholder="Mensaje"
            name="message"
            required
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-outline-success botonPP">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Poupup;
