import * as Types from '../../Constants/user/ActionTypes';

export const actAddToCart = (product) => {
    return {
        type: Types.ADD_TO_CART,
        product,

    }
}

export const DeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product

    }
}
export const actUpdateProductInCart = (product, quantaity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantaity

    }
}
