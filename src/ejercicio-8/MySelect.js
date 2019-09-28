import React from 'react';

class MySelect extends React.Component {    
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <select value={this.props.itemSelectedId} onChange={this.props.onChange} name={this.props.name}>
                    <option value="0">Selecciona</option>
                    {this.props.items.map(item =>
                        <option value={item.id} key={item.id}>{item.value}</option>
                    )}
                </select>
            </div>)
    }
}

export default MySelect;