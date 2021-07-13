import React from "react";


class Poupup extends React.Component {
  render() {
    return (
      <div className="popupWrapper">
        
        
        
        <body className="body">
        Contactanos:
        <br />        
        
        <input type="email" id="email" required placeholder="Correo electronico"/>
        <br /> 
        <input type="text" id="nombre" required maxlength="30" placeholder="Nombre"/>
        <br /> 
        <select name="razones" id="razones">
          <option value="r1">Inoformacion sobre precios</option>
          <option value="r2">Informacion sobre productos</option>
          <option value="r3">Sin especificar</option>
        </select>
        <br />
        <input type="text" placeholder="Añade una breve descripción"></input>
        <br />
        <input type="submit"></input>
        </body>
      </div>
    );
  }
}

export default Poupup;
