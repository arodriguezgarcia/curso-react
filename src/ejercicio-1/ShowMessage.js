import React from 'react';

const showMessage = true;
const ShowMessage = (props) => <p className="show-message">{showMessage ? 'Ahora puedes leer esto: ' + props.text : ''}</p>

export default ShowMessage;