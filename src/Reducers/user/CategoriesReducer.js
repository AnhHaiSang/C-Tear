import * as Types from '../../Constants/user/ActionTypes';

const categoriesInte = []
const categoriesReducer = (state = categoriesInte, action) => {
    switch (action.type) {
        case Types.GET_PRODUCT_CATEGORIES:
            
            // console.log(action.categories);
            
            return action.categories
        default:
            return state
    }
}
export default categoriesReducer;