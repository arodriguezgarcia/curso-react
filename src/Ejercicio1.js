import React from 'react';
import Greeting from './ejercicio-1/Greeting.js';
import ShowName from './ejercicio-1/ShowName.js';
import ShowDate from './ejercicio-1/ShowDate.js';
import ShowMessage from './ejercicio-1/ShowMessage.js';
import ShowMessage2 from './ejercicio-1/ShowMessage2.js';

const Ejercicio1 = (props) => {
    return (
        <div>
            <h1 className="ejercicio">1. Renderizando elementos</h1>
            <Greeting />
            <ShowName />
            <ShowDate />
            <ShowMessage text="Hola" />
            <ShowMessage2 />
        </div>
    )
}

export default Ejercicio1;