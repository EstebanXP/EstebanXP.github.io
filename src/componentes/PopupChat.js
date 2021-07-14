import React from "react";

class Poupup extends React.Component {
  render() {
    return (
      <div className="popupWrapper">
        <div className="head-text">Contactanos: </div>
        <div className="chat-box">
          <div className="desc-text">Por favor, llenar los siguientes campos</div>
          <form action="#">
            <div className="field">
              <input type="text" placeholder="Nombre completo" required></input>
            </div>
            <br />
            <div className="field">
              <input type="email" placeholder="Correo electronico" required></input>
            </div>
            <br />
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Escribe algo..."></textarea>
            </div>
            <div className="field">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
        
    );
  }
}

export default Poupup;
