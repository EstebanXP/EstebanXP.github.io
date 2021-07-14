import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a class="productos" href="#productos">Productos</a>
            </div>
        );
    }
}

export default Navbar;