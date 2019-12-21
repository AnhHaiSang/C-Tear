import * as Types from '../../Constants/user/ActionTypes';
const ProfileReducerInitialState = []
export const ProfileReducer = (state = ProfileReducerInitialState, action) => {
    switch (action.type) {
        case Types.GETPROFILE:
            state=action.profile
            return [...state]
       
        default:
            return state
    }
}

export default ProfileReducer;