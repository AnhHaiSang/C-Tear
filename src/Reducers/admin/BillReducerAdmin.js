import * as Types from '../../Constants/admin/TypeActionAdmin';

const InitialState = [];
const BillReducerAdmin = (state = InitialState, action) => {
    switch (action.type) {
        case Types.SHOW_BILL:
            state = action.billad;
            return [...state]
        default:
            return state
    }
}

export default BillReducerAdmin;