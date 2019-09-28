import React from 'react';
import Product from './Product.js';
import ConditionalRender from './../ejercicio-8/ConditionalRender.js';


class ProductList extends React.Component { 

    render() {
        const products = this.props.products.map(product => {

            return (
                <li key={product.id}>
                    <Product name={product.name} price={product.price} />
                    <ConditionalRender if={this.props.onAddProduct}>
                        <button onClick={() => this.props.onAddProduct(product)}>Añadir</button>
                    </ConditionalRender>
                    <ConditionalRender if={this.props.onRemoveProduct}>
                        <button onClick={() => this.props.onRemoveProduct(product)}>Quitar</button>
                    </ConditionalRender>
                </li>
            );
        });
        
        return (
            <>
                <h3>{this.props.label}</h3>
                <ul>
                    {products}
                </ul>
            </>          
        );
    }
}

export default ProductList;