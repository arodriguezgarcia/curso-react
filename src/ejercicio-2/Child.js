import React from 'react';

const Child = ({ onPress, children }) => <button onClick={onPress}>{children}</button>

export default Child;