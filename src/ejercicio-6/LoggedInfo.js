import React from 'react';

class LoggedInfo extends React.Component {
    state = {
        logged: false
    }

    login = () => {
        this.setState({ logged: true});
    }

    logout = () => {
        this.setState({ logged: false});
    }

    render() {
        if (this.state.logged) {
            return (
                <div>
                    <p>Esta pagina solo puedo verla por que estoy logueado</p>
                    <button onClick={this.logout}>Cerrar sesión</button>
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.login}>Inicia sesión</button>
                <p>Inicia sesión para ver contenido privado</p>
            </div>
        )

    }
}

export default LoggedInfo;