import * as Types from '../../Constants/admin/TypeActionAdmin';

const ProductsInitialState = [];
const ProductsReducerAdmin = (state = ProductsInitialState, action) => {
    switch (action.type) {
        case Types.SHOW_PRODUCTS:
            state = action.products;
            return [...state]
        case Types.ADD_PRODUCTS_TO_SV:
            state.push(action.products);
            return [...state]
        case Types.DELETE_PRODUCTS_IN_SV:
            let index = state.findIndex(item => {
                return item.id === action.id;
            })
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_PRODUCTS_IN_SV:
            const index2 = state.findIndex(({ id }) => id === action.products.id);
            state[index2] = action.products;
            return [...state];
        default:
            return state
    }
}

export default ProductsReducerAdmin;