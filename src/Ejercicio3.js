import React from 'react';
import Counter from './ejercicio-3/Counter.js';
import String from './ejercicio-3/String.js';

class Ejercicio3 extends React.Component {
    render() {
        return (
            <div>
                <h1 className="ejercicio">3. El estado</h1>
                <Counter />
                <String />
            </div>
        )
    }
}

export default Ejercicio3;
