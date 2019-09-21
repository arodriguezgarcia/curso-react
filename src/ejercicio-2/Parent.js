import React from 'react';
import Child from './Child.js';

const printHello = () => console.log('Hola a todos!');
const Parent = ({ children }) => <Child onPress={printHello}>{children}</Child>

export default Parent;