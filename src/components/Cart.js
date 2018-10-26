import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkOut } from '../actions';

class Cart extends Component {
    constructor(props) {
        super(props)
        this._checkOut = this._checkOut.bind(this);
    }

    _checkOut() {
        this.props.dispatch(checkOut());
    }

    render() {
        let cart = this.props.cart;
        console.log(cart.products)
        return (
            <div>
                <h3>Your Cart</h3>
                <div>
                    <p><em>{cart.title}</em></p>
                    <ul id="productlist">
                        {
                            cart.products.map((product, index) => {
                                return (
                                    <li key={index}>{product.title} - ${product.price} - x{product.inventory}</li>
                                )
                            })
                        }
                    </ul>
                    <p>Total: ${cart.total}</p>
                </div>
                <button onClick={this._checkOut}>Check out</button>
            </div>
        )
    }
}

function _mapStateToPropsTop(state) {
    return {
        cart: state.cart
    }
}

export default connect(_mapStateToPropsTop)(Cart);