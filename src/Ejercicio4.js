import React from 'react';
import UserList from './ejercicio-4/UserList.js';
import TaskList from './ejercicio-4/TaskList.js';

class Ejercicio4 extends React.Component {
    state = {
        showList: true
    }

    removeComponent = () => {
        this.setState(state => ({ 
            showList: !state.showList
        }));
    }

    render() {
        return (
            <div>
                <h1 className="ejercicio">4. Ciclos de vida</h1>
                {this.state.showList ? <UserList /> : ''}           
                <button onClick={this.removeComponent}>Mostrar/Eliminar</button>
                <br /> <br />  
                <TaskList />
            </div>
        )
    }
}

export default Ejercicio4;
