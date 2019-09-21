import React from 'react';

const user = {
    name: 'Alex'
}
const ShowName = () => <p className="show-name">Nombre: {user.name}</p>

export default ShowName;