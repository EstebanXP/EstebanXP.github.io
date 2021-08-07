import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="topnav">
                <Link to="/">
                    <h4 className="active">Home</h4>
                </Link>
                <Link to="/productos">
                    <h4 className="productos">Productos</h4>
                </Link>
            </div>
        );
    }
}

export default Navbar;