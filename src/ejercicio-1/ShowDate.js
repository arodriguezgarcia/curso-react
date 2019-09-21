import React from 'react';

const getDate = () => new Date().toLocaleDateString();
const ShowDate = () => <span className="show-date">Fecha: {getDate()}</span>

export default ShowDate;