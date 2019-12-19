import * as Types from '../../Constants/admin/TypeActionAdmin';

var initialState = {};

const EditItem = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_CATEGORIES_IN_SV:
                return action.categories;
        default:
            return state;
    }
}

export default EditItem;