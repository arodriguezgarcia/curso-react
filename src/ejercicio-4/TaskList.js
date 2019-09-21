import React from 'react';

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ''
        }
      }

    componentDidMount() {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(tasks => {
                    this.setState({ tasks: tasks.slice(0, 3) });
                });         
            }, 500);   
    }

    render() {
        return (
            <div>
                {this.state.tasks ? JSON.stringify(this.state.tasks) : 'Cargando...'}
            </div>
        )

    }
}

export default TaskList;