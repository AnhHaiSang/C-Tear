import * as Types from '../../Constants/user/ActionTypes';

export const AddToCart = (product, total) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        total
    }
} 