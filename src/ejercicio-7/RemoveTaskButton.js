import React from 'react';

class RemoveTaskButton extends React.Component {    
    render() {
        return (
            <button onClick={this.props.onPress}>X</button>
        )

    }
}

export default RemoveTaskButton;