import React from 'react';
import Loading from './ejercicio-2/Loading.js';
import Parent from './ejercicio-2/Parent.js';

const Ejercicio2 = (props) => {
    return (
        <div>
            <h1 className="ejercicio">2. Componentes y propiedades</h1>
            <Loading show />
            <br />
            <Parent>Haz click</Parent>
        </div>
    )
}

export default Ejercicio2;
