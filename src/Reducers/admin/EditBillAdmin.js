import * as Types from '../../Constants/admin/TypeActionAdmin';

var initialState = {};

const EditBillAdmin = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_BILL_IN_SV:
                return action.orders;
        default:
            return state;
    }
}

export default EditBillAdmin;