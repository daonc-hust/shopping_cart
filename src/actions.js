export function addToCart(id) {
    return {
        type: "ADD_TO_CART",
        id
    }
}

export function checkOut() {
    return {
        type: "CHECK_OUT"
    }
}