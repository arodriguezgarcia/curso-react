import React from 'react';

class SelectText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
      }

    changeSelect = (e) => {
        e.preventDefault();
        this.setState({ text: e.currentTarget.value});  
    }

    render() {
        return (
            <div>
                <select onChange={this.changeSelect}>
                    <option value=""></option>
                    <option value="Opción 1">Opción 1</option>
                    <option value="Opción 2">Opción 2</option> 
                    <option value="Opción 3">Opción 3</option> 
                </select>
                => {this.state.text}
            </div>              
        )

    }
}

export default SelectText;