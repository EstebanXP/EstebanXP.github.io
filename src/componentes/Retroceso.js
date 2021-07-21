import React from 'react';
import Button from 'react-bootstrap/Button'

class Retroceso extends React.Component{
    render(){
        return(
            <div className="Retroceso">
                    <Button variant="primary" size="lg">
                    Large button
                    </Button>
                    <p>Este es un boton de retroceso</p>
            </div>
        );
    }
}

export default Retroceso;