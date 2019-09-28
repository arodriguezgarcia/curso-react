import React from 'react';
import ColorPicker from './ejercicio-9/ColorPicker.js';
import ColorText from './ejercicio-9/ColorText.js';

class Ejercicio9 extends React.Component {

    state = {
        color: '#ff0000'
    };

    render() {
        return (
            <div>
                <h1 className="ejercicio">9. Levantar estado</h1>                
                <ColorPicker color={this.state.color} onChange={this.handleInputChange} />
                <ColorText color={this.state.color}>Este es mi texto</ColorText>
            </div>
        )
    }

    handleInputChange = (event) => {
        this.setState({
          color: event.target.value
        })
      }
}

export default Ejercicio9;
