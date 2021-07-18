import React from 'react';
import fruta from '../assets/ejemploFondo.jpg';

class ImagenFondo extends React.Component{
    render(){
        return(
            <img src={fruta} alt='fruteria'></img>
        );
    }
}

export default ImagenFondo;