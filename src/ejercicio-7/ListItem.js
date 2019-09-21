import React from 'react';
import RemoveTaskButton from './RemoveTaskButton.js';
import InputText from './InputText.js';

class ListItem extends React.Component {    
    state = {
        taskText: this.props.task.text
    }
    onChange = (e) => {
        this.setState({ taskText: e.target.value});
        this.props.onChange(e.target.value, this.props.task.id);
    }
    render() {
        return (
            <li>
                <InputText value={this.props.task.text} onChange={this.onChange} />
                <RemoveTaskButton onPress={this.props.onPress} />
            </li>
        )

    }
}

export default ListItem;