let initialState = {
    products: [
        {
            "id": 1,
            "title": "iPad 4 Mini",
            "price": 500.01,
            "inventory": 2
        },
        {
            "id": 2,
            "title": "H&M T-Shirt White",
            "price": 10.99,
            "inventory": 10
        },
        {
            "id": 3,
            "title": "Charli XCX - Sucker CD",
            "price": 19.99,
            "inventory": 5
        }
    ],
    cart: {
        products: [],
        title: "Please add some products to cart.",
        total: 0.00
    }
}

const shop = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: state.products.map((product) => {
                    return (product.id === action.id) ? { ...product, inventory: product.inventory - 1 } : product;
                }),
                cart: {
                    products: state.cart.products.findIndex(product => product.id === action.id) === -1 ?
                        [...state.cart.products, {
                            id: action.id,
                            title: state.products[state.products.findIndex(product => product.id === action.id)].title,
                            price: state.products[state.products.findIndex(product => product.id === action.id)].price,
                            inventory: 1
                        }]
                        :
                        state.cart.products.map((product) => {
                            return (product.id === action.id) ? { ...product, inventory: product.inventory + 1 } : product;
                        })
                    ,
                    title: "",
                    total: state.cart.total + state.products[action.id - 1].price
                }
            }

        case "CHECK_OUT":
            return {
                ...state,
                cart: {
                    products: [],
                    title: "Please add some products to cart.",
                    total: 0
                }
            }
        default:
            return state;
    }

    console.log(state.cart.products);

}

export default shop;

