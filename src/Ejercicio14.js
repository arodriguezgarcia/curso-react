import React from 'react';

class Ejercicio14 extends React.Component {

    constructor(props) {
        super(props);

        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
      }

    sendInputs = () => {
      console.log(this.myRef1.current.value, this.myRef2.current.value);
    }
    
    render() {
      return (
        <>
          <h1 className="ejercicio">14. Referencias a elementos DOM</h1>
          <input type="text" ref={this.myRef1} />
          <input type="text" ref={this.myRef2} />
          <button onClick={this.sendInputs}>Enviar</button>
        </>
      );
    }
} 

export default Ejercicio14;
