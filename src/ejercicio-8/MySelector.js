import React from 'react';

class MySelector extends React.Component {    
    render() {
        const inputs = this.props.items.map(item =>
            <span key={item}>
                {item}
                <input
                    name={this.props.name}
                    type={this.props.type}
                    value={item}
                    checked={this.props.checkeds.includes(item)}
                    onChange={this.props.onChange}
                    />
            </span>
        );
        return (
            <div>
                <label>{this.props.label}</label>
                {inputs} 
            </div>
        )
    }
}

export default MySelector;