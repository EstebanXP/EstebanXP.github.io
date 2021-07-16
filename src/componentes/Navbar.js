import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a className="productos" href="#productos">Productos</a>
            </div>
        );
    }
}

export default Navbar;