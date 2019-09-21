import React from 'react';

class String extends React.Component {
    state = {
        string: ''
    }

    increment = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const character = characters.charAt(Math.floor(Math.random() * characters.length));

        this.setState({ string: this.state.string + character })
    }

    decrement= () => {
        this.setState({ string: this.state.string.slice(1) })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span className={this.state.string ? 'caja' : ''}>{this.state.string}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default String;