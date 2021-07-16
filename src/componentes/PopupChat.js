import React from "react";

class Poupup extends React.Component {

  /*holaMundo=()=>{
      alert("Hola mundo");
  }*/

  render() {
    return (
      <div className="container">
        <button className="btn btn-info btn-chat" type="button" >Chat</button>
        <div className="chatbox" id="chatbox">
          <div className="header">
            <h2 id="header">Mensaje </h2>
          </div>
          <form className="form-container">
            <input type="email" required placeholder="Correo electronico" className="field"></input>
            <input type="text" required placeholder="Nombre completo" className="field"></input>
            <textarea type="text" placeholder="Escribe tus dudas" name="msg" required></textarea>
            <button type="button" className="btn btn-outline-success">Enviar</button>
          </form> 
        </div>
      </div>
        
    );
  }
}

export default Poupup;
