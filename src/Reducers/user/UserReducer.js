import * as Types from '../../Constants/user/ActionTypes';

const UserReducerInitialState = []
export const UserReducer = (state = UserReducerInitialState, action) => {
    let {users} = action
    switch (action.type) {
        case Types.ADDUSER:
            // console.log(users);
            state.push(users)
            return [...state]
        case Types.GETAPIUSER:
            state = users
            return [...state]
        default:
            return state
    }
}
export default UserReducer;