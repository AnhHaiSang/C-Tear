import * as Types from '../../Constants/user/ActionTypes';

export const AddToCart = (product, total) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        total
    }
} 

export const DauCong = (product, total) => {
    return{
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        total
    }
}