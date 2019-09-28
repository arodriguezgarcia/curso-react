import React from 'react';

class Product extends React.Component {    
    render() {
        return (
            <>
                {this.props.name} ({this.props.price} €)
            </>          
        );
    }
}

export default Product;