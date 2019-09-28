import React from 'react';

class ColorText extends React.Component {    
    render() {
        return (
            <div>
                <span style={{color: this.props.color}}>{this.props.children}</span>
            </div>            
        );
    }
}

export default ColorText;