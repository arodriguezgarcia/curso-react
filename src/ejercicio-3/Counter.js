import React from 'react';
import CounterButton from './CounterButton.js';
import CounterBox from './CounterBox.js';

class Counter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }


    render() {
        return (
            <div>
                <CounterButton onPress={this.decrement}>-</CounterButton>
                <CounterBox>{this.state.count}</CounterBox>
                <CounterButton onPress={this.increment}>+</CounterButton>
            </div>
        )
    }
}

export default Counter;