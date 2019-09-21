import React from 'react';

class InputText extends React.Component {    
    render() {
        return (
            <input type="text" onChange={this.props.onChange} value={this.props.value} />
        )

    }
}

export default InputText;