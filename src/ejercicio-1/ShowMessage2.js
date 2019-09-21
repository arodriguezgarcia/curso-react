import React from 'react';
import ShowMessage from './ShowMessage.js';

const showMessage = true;
const ShowMessage2 = () => showMessage ? <ShowMessage text='Hola 2' /> : ''

export default ShowMessage2;