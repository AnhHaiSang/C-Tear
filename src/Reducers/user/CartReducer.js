import * as Types from '../../Constants/user/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART')); // lay data in localStorage
const InitialState = data ? data : [];

const CartReducer = (state = InitialState, action) => {
    let { product, quantity } = action;
    var index = -1;

    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        // xoa product trong cart 
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]

        // cap nhat cart
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default:
            return state
    }
}


//tim id 
var findProductInCart = (cartItems, product) => {
    var index = -1;
    if (cartItems.length > 0) {
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default CartReducer;