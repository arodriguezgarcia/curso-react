import React from 'react';

class AddTaskButton extends React.Component {    
    render() {
        return (
            <button onClick={this.props.onPress}>Add task</button>
        )

    }
}

export default AddTaskButton;