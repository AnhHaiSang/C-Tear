import * as Types from '../../Constants/user/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
const CartReducerInitialState = data ? data : [];
const CartReducer = (state = CartReducerInitialState, action) => {
    let {product,total} = action
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
                index = findProductInCart(state, product);
                if (index !== -1) {
                    state[index].price += total;
                } else {
                    state.push({
                        product,
                        total
                    });
                }
            localStorage.setItem('Cart',JSON.stringify(state));
            return [...state]
        default:
            return state
    }
}
//tim id 
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default CartReducer;