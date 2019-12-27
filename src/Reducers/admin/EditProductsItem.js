import * as Types from '../../Constants/admin/TypeActionAdmin';

var initialState = {};

const EditProductsItem = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCTS_IN_SV:
            return action.products
        default:
            return state;
    }
}

export default EditProductsItem;