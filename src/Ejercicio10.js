import React from 'react';
import ShoppingCart from './ejercicio-10/ShoppingCart.js';

class Ejercicio10 extends React.Component {

    state = {
        productsSelected: [],
        disccount: 0
    };

    products = [
        {
            id: 1,
            name: 'Producto 1',
            price: 10
        },
        {
            id: 2,
            name: 'Producto 2',
            price: 4
        },
        {
            id: 3,
            name: 'Producto 3',
            price: 5
        }
    ];

    render() {
        return (
            <div>
                <h1 className="ejercicio">10. Pensando en React</h1>                
                <ShoppingCart 
                    disccount={this.state.disccount}
                    disccountApply={this.state.disccountApply}
                    products={this.products} 
                    productsSelected={this.state.productsSelected}
                    onAddProduct={this.addProduct}
                    onCheckSavingCode={this.checkSavingCode}
                    onRemoveProduct={this.removeProduct} />
            </div>
        )
    }

    addProduct = (productSelected) => {
        this.setState({
            productsSelected: [...this.state.productsSelected, productSelected]
        });
    }

    removeProduct() {

    }

    checkSavingCode = (e) => {
        if (e.target.value === 'SAVE10') {
            this.setState({
                disccount: 10,
                disccountApply: 'Descuento aplicado del 10%'
            });
        } else {
            this.setState({
                disccount: 0,
                disccountApply: 'Código descuento no válido'
            });
        }
    }
}

export default Ejercicio10;
