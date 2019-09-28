import React from 'react';

class ConditionalRender extends React.Component {    
    render() {
        return this.props.if ? this.props.children : null;
    }
}

export default ConditionalRender;