import React from 'react';

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ''
        }
      }

    getTasks = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(tasks => {
                this.setState({ tasks: tasks.slice(0, 5) });
            });         
            
    }

    render() {
        return (
            <div>
                {this.state.tasks ? JSON.stringify(this.state.tasks) : <button onClick={this.getTasks}>Get Tasks</button>}
            </div>
        )

    }
}

export default TaskList;