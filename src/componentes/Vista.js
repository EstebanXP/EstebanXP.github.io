import React from 'react';
import ImagenFondo from './ImagenFondo';
import NavegadorDeImagen from './NavegadorDeImagen';
import Titulos from './Titulos';
import VerMas from './VerMas';
import Retroceso from './Retroceso';

class Vista extends React.Component{
    render(){
        return(
            <div className="Vista">
                <Retroceso></Retroceso>
                
            </div>
        );
    }
}

export default Vista;