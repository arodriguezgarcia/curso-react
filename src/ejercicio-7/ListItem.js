import React from 'react';
import RemoveTaskButton from './RemoveTaskButton.js';

class ListItem extends React.Component {    
    render() {
        return (
            <li>
                {this.props.task.text}
                <RemoveTaskButton onPress={this.props.onPress} />
            </li>
        )

    }
}

export default ListItem;