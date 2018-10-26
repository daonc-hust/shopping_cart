import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import fetchTimeout from 'fetch-timeout';
import $ from 'jquery';

class Products extends Component {
    constructor(props) {
        super(props)
        this._addToCart = this._addToCart.bind(this);
    }

    _addToCart(id) {
        // return new Promise(function (resolve, reject) {
        //     fetch("https://xtool.topica.vn/daonc.php")
        //         .then(response => resolve(response.json()
        //             .then((res) => console.log(res))))
        //         .catch((err) => {
        //             reject(err);
        //         })
        // })

        return new Promise(function(resolve, reject) {
            fetchTimeout("https://xtool.topica.vn/daonc.php", {}, 6000, "TIMEOUT ERROR!!!")
                .then(response => {
                    response.json()
                    .then((res)=>console.log(res))
                })
                .catch((err) => {
                    reject(err);
                })
        })


        if (this.props.products.find(p => p.id == id).inventory > 0)
            this.props.dispatch(addToCart(id));
        else {
            $("#btnAddToCart" + id).html('Sold Out');
            $("#btnAddToCart" + id).prop('disabled', true);
        }
    }

    render() {
        let products = this.props.products;
        return (
            <div>
                <h3>Products</h3>
                <div>
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index}>
                                    <span>{product.title} - ${product.price} - x{product.inventory}</span><br />
                                    <button id={"btnAddToCart" + product.id} onClick={this._addToCart.bind(this, product.id)}>Add to cart</button><br /><br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function _mapStateToPropsTop(state) {
    return {
        products: state.products
    }
}

export default connect(_mapStateToPropsTop)(Products);