import * as Types from '../../Constants/admin/TypeActionAdmin';

const CategoriesInitialState = []
const CategoriesReducerAdmin = (state = CategoriesInitialState, action) => {
    switch (action.type) {
        case Types.SHOWCATEGORIES:
            state = action.categories;
            return [...state]
        case Types.ADD_TO_SV:
            state.push(action.categories);
            // console.log(state);
            return [...state]
        case Types.DELETE_PRODUCT_IN_SV:
            
           
            console.log(action.categories);
            return [...state]
        default:
            return state
    }
}
export default CategoriesReducerAdmin;