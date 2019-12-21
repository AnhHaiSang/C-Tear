import * as Types from '../../Constants/user/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
const CartReducerInitialState = data ? data : [];

const CartReducer = (state = CartReducerInitialState, action) => {
    let {product,count} = action
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
                index = findProductInCart(state, product);       
                if (index !== -1) {
                    state[index].count += count;
                } else {
                    state.push({
                        product,
                        count
                    });
                }
                // console.log(localStorage.getItem('CART'));
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
// localStorage.setItem('CART',JSON.stringify(state.user.name));
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product.product);
            // console.log(index);
            
            if (index !== -1) {
                state.splice(index, 1);
                
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

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