import * as Types from '../../Constants/admin/TypeActionAdmin';

const InitialState = [];
const AccoutReducerAdmin = (state = InitialState, action) => {
    switch (action.type) {
        case Types.SHOW_ACCOUT:
            state = action.users;
            return [...state]
        default:
            return state
    }
}

export default AccoutReducerAdmin;