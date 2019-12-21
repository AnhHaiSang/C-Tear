import * as Types from '../../Constants/user/ActionTypes';

const BillReducerInitialState = []
export const BillReducer = (state = BillReducerInitialState, action) => {
    switch (action.type) {
        case Types.ADDAPIORDER:
            state.push(action.bill)
            return [...state]
        case Types.GETBILLHISTORY:
            state = action.bill
            return [...state]
        default:
            return state
    }
}

export default BillReducer;