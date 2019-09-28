import React from 'react';
import ProductList from './ProductList.js';

class ShoppingCart extends React.Component {    
    render() {
        return (
            <>
                <h2>Mi Carrito de la compra</h2>
                Código descuento<input type="text" value={this.props.savingCode} onChange={this.props.onCheckSavingCode} />
                {this.props.disccountApply}
                <ProductList label="Listado de productos" products={this.props.products} onAddProduct={this.props.onAddProduct} />
                <ProductList label="Mi carrito" carrito products={this.props.productsSelected} onRemoveProduct={this.props.onRemoveProduct} />
                <span>Total: {this.props.productsSelected.reduce((acc, product) => (acc + product.price * 1), 0) * (100 - this.props.disccount) / 100} €</span>
            </>          
        );
    }
}

export default ShoppingCart;