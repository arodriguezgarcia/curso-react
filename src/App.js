import React from 'react';
import Ejercicio1 from './Ejercicio1.js';
import Ejercicio2 from './Ejercicio2.js';
import Ejercicio3 from './Ejercicio3.js';
import Ejercicio4 from './Ejercicio4.js';
import Ejercicio5 from './Ejercicio5.js';
import Ejercicio6 from './Ejercicio6.js';
import Ejercicio7 from './Ejercicio7.js';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ejercicio1/>
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
        <Ejercicio5 />
        <Ejercicio6 />
        <Ejercicio7 />
        <a name="fin" />
      </header>
    </div>
  );
}

export default App;
