import React from "react";

class Poupup extends React.Component {

  cerrarChat=()=>{
    document.getElementById("chatbox").style.display='none';
  }

  holaMundo=()=>{
    const texto=document.getElementById("bChat");
    if(texto.textContent==="Chat"){
      document.getElementById("chatbox").style.display='block';
      document.getElementById("bChat").textContent="Cerrar";
    }else if(texto.textContent!=="Chat"){
      document.getElementById("bChat").textContent="Chat";
      this.cerrarChat();
    }
  }

  render() {
    return (
      <div className="container">
        <button id="bChat" className="btn btn-info btn-chat" type="button" onClick={this.holaMundo}>Chat</button>
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
        <div>{this.cerrarChat}</div>
      </div>
        
    );
  }
}

export default Poupup;
