import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import Swal from 'sweetalert2'


const Poupup =()=>{
  const [toSend, setToSend] = useState({
    correo: '',
    subject: '',
    message: '',
    name: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
  };

  const enviarEmail=(e)=>{
    e.preventDefault();
    send(
      'service_shg556m',
      'template_0vnvgms',
      toSend,
      'user_vR3QsGpeKhWlUGqEAdTHq'
    )
      .then(() => {
        Swal.fire("Correo enviado!", "Nos contactaremos lo mas pronto posible", "success");
        handleReset();
        cerrarChat();
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  function cerrarChat(){
    document.getElementById("bChat").textContent="Chat";
    document.getElementById("chatbox").style.display='none';
  }

  function abrirChat(){
    document.getElementById("chatbox").style.display='block';
    document.getElementById("bChat").textContent="Cerrar";
  }


  function holaMundo(){
    const texto=document.getElementById("bChat");
    if(texto.textContent==="Chat"){
      abrirChat();
    }else if(texto.textContent!=="Chat"){
      cerrarChat();
    }
  }

  

    return (
      <div className="container">
        <button id="bChat" className="btn btn-info btn-chat" type="button" onClick={holaMundo}>Chat</button>
        <div className="chatbox" id="chatbox">
          <div className="header">
            <h2 id="header">Contactanos</h2>
          </div>
          <form 
            onSubmit={enviarEmail} 
            className="form-container" 
            id="form">
            
            <input 
              type="email" 
              required 
              placeholder="Correo electronico" 
              className="field" 
              name="correo"
              value={toSend.correo}
              onChange={handleChange}
              >

            </input>

            <input 
              type="text" 
              required 
              placeholder="Motivo de contacto" 
              className="field" 
              name="subject"
              value={toSend.subject}
              onChange={handleChange}
              >
            </input>

            <input 
              type="text" 
              required 
              placeholder="Nombre completo" 
              className="field" 
              name="name"
              value={toSend.name}
              onChange={handleChange}
              >
            </input>
      
            <textarea 
              type="text" 
              placeholder="Escribe tus dudas" 
              name="message" 
              required
              value={toSend.message}
              onChange={handleChange}
              >
            </textarea>
            <button type="submit" className="btn btn-outline-success">Enviar</button>
          </form> 
        </div>
      </div> 
    );
  
}

export default Poupup;
