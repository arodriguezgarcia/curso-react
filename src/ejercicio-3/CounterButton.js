import React from 'react';

const CounterButton = ({ onPress, children }) => <button onClick={onPress}>{children}</button>

export default CounterButton;