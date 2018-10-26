import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header /> <hr/>
                <Products /> <hr/>
                <Cart />
            </div>
        )
    }
}

export default App;