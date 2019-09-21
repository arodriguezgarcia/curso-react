import React from 'react';
import TaskList from './ejercicio-5/TaskList.js';
import InputText from './ejercicio-5/InputText.js';
import SelectText from './ejercicio-5/SelectText.js';

class Ejercicio5 extends React.Component {

    render() {
        return (
            <div>
                <h1 className="ejercicio">5. Eventos</h1>
                <TaskList />
                <br /><br />
                <InputText />
                <br /><br />
                <SelectText />
            </div>
        )
    }
}

export default Ejercicio5;
