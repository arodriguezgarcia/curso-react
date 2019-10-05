import React from 'react';
import styled, { css } from 'styled-components';
import colors from './colors.js';

const Button = styled.button `
  padding: 10px;
  border: 1px solid black;
  background-color: ${colors.primaryColor};
  color: black;
  ${props => props.success && css `
    background-color: green;
    border-color: green;
    color: white;
  `}
  ${props => props.warning && css `
    background-color: orange;
    border-color: orange;
    color: white;
  `}
  ${props => props.language === 'es' && css `
    background-color: yellow;
  `}
`;
class Ejercicio15 extends React.Component {

    constructor(props) {
        super(props);

      }

    render() {
      return (
        <>
          <h1 className="ejercicio">15. CSS Styles</h1>
          <Button>Click default</Button>
          <Button success>Click success</Button>
          <Button warning>Click warning</Button>
          <Button language="es">Click default</Button>
        </>
      );
    }
} 

export default Ejercicio15;
