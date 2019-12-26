import * as Types from '../../Constants/admin/TypeActionAdmin';

const CategoriesInitialState = [];

const CategoriesReducerAdmin = (state = CategoriesInitialState, action) => {
    switch (action.type) {
        case Types.SHOWCATEGORIES:
            state = action.categories;
            return [...state]
        case Types.ADD_TO_SV: 
            state.push(action.categories);
            return [...state]
        case Types.DELETE_CATEGORIES_IN_SV:
            let index = state.findIndex(item => {
                return item.id === action.id;
            })
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_CATEGORIES_IN_SV:
            const index2 = state.findIndex(({ id }) => id === action.categories.id);
            state[index2] = action.categories;
            return [...state];
        default:
            return state
    }
}

export default CategoriesReducerAdmin;