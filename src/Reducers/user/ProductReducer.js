
import * as Types from '../../Constants/user/ActionTypes';
const ProductReducer = []
 const productsReducer = (state = ProductReducer, action) => {
    switch (action.type) {
        case Types.SHOWPRODUCT:
            state = action.products
            
            return [...state]
        case Types.GET_PRODUCT_DETAIL:
            // console.log(action.products);
            
            return action.products;
           
        
        default:
            return state
    }
}
export default productsReducer;
