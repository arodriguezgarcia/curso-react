import React from 'react';
import List from './List.js';
import InputText from './InputText.js';
import AddTaskButton from './AddTaskButton.js';

class ListContainer extends React.Component {    
    state = {
        todos: [{
            id: 1,
            text: 'aa'
        }],
        textTask: ''
    }

    addTask = () => {
        if (this.state.textTask) {
            this.setState({ 
                todos: [...this.state.todos, {
                    id: new Date().getTime(),
                    text: this.state.textTask
                }],
                textTask: ''
            });
        }
    }

    editTask = (text, id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.text = text;
            }

            return todo;
        })})
    }

    changeTask = (e) => {
        this.setState({ textTask: e.target.value})
    }

    removeTask = (id) => {        
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }

    render() {
        return (
            <div>
                <InputText onChange={this.changeTask} value={this.state.textTask} />
                <AddTaskButton onPress={this.addTask} />
                <List todos={this.state.todos} onPress={this.removeTask} onChange={this.editTask} />
            </div>
        )

    }
}

export default ListContainer;