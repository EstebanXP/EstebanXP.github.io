import React from 'react';
import ImagenFondo from './ImagenFondo';
import NavegadorDeImagen from './NavegadorDeImagen';
import Titulos from './Titulos';
import VerMas from './VerMas';

class Vista extends React.Component{
    render(){
        return(
            <div className="Vista">
                <ImagenFondo></ImagenFondo>
                <h3>Esta es una vista</h3>
                <Titulos></Titulos>
                <VerMas></VerMas>
                <NavegadorDeImagen></NavegadorDeImagen>
            </div>
        );
    }
}

export default Vista;