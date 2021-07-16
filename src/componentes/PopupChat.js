import React from "react";

class Poupup extends React.Component {

  holaMundo=()=>{
    const texto=document.getElementById("bChat").firstChild;
    if(texto.firstChild.data=="Chat"){
      texto.firstChild.data="Cerrar";
    }else{
      texto.firstChild.data="Chat";
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
      </div>
        
    );
  }
}

export default Poupup;
