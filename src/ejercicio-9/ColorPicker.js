import React from 'react';

class ColorPicker extends React.Component {    
    render() {
        return (
            <input type="color" value={this.props.color} onChange={this.props.onChange} />          
        );
    }
}

export default ColorPicker;