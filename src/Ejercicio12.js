import React from 'react';

class Counter extends React.Component {


  state = {
    count: 0
  }

  increment = () => {
      this.setState({ count: this.state.count + 1 });
      if (this.state.count === 3) {
        throw new Error('Se ha producido un error');
      }
  }
  
  render() {
    return (
        <>
          {this.state.count} <button onClick={this.increment}>Click</button>
        </>
    );
  }
} 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.log('Hay errores', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class Ejercicio12 extends React.Component {

    constructor(props) {
        super(props);
      }
    
    render() {
      return (
        <>
          <h1 className="ejercicio">12. Gestión de errores</h1>
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
        </>
      );
    }
} 

export default Ejercicio12;
