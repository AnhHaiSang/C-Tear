import * as Types from '../../Constants/admin/TypeActionAdmin';

const InitialState = [];
const LoginAdminReducer = (state = InitialState, action) => {
    switch (action.type) {
        case Types.GET_ACCOUT_AMIN:
            state = action.admin;
            return [...state]
        default:
            return state
    }
}

export default LoginAdminReducer;