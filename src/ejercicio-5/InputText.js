import React from 'react';

class InputText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
      }

    changeText = (e) => {
        e.preventDefault();
        this.setState({ text: e.currentTarget.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeText}/>
                => {this.state.text}
            </div>
        )

    }
}

export default InputText;