import React from 'react';

class MyInput extends React.Component {    
    render() {
        const input = (this.props.type !== 'textarea') 
            ? (<input
                {...this.props}
            />)
            : (<textarea
                {...this.props}
            />);
        
        return (
            <div>
                <label>{this.props.label}</label>
                {input}
            </div>            
        );
    }
}

export default MyInput;