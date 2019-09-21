import React from 'react';
import Title from './Title.js';
import Text from './Text.js';
import List from './List.js';
import ListItem from './ListItem.js';
import Link from './Link.js';
import logo from './../logo.svg';

const Loading = (props) => {
    if (props.show) {
        return (
            <div>
                <Title>Necesito partir en componentes todo esto</Title>
                <Text>Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:</Text>
                <List>
                    <ListItem>Observar el HTML</ListItem>
                    <ListItem>Pensar en como puedo extraer cada trozo en componentes</ListItem>
                    <ListItem>Usarlos en React</ListItem>
                </List>
                <Link href="https://reactjs.org/" openInNewTab>React Docs</Link>
            </div>
        )
    }

    return <div>Loading...<br /><img src={logo} className="App-logo" alt="logo" /></div>;
}

export default Loading;