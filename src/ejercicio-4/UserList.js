import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: ['Alex', 'Luis']
        }
      }

    componentDidMount() {
        this.setState({ users: [...this.state.users, 'Pedro']});
    }

    componentWillUnmount() {
        console.log('Componente destruido!');
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.users)}
            </div>
        )

    }
}

export default UserList;