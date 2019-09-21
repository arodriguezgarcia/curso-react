import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {    
    render() {
        if (this.props.todos.length) {
            return (
                <ul>
                    {this.props.todos.map(todo =>
                        <ListItem key={todo.id.toString()} onPress={() => this.props.onPress(todo.id)} task={todo}></ListItem>
                    )}
                </ul>
            )
        }

        return <p>Aun no hay tareas</p>

    }
}

export default List;