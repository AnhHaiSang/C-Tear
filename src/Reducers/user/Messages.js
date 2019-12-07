import * as Message from '../../Constants/user/Messages';
import * as Types from '../../Constants/user/ActionTypes';
var messState = Message.MSG_WELCOME;

const Messages = (state = messState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.Message;
        default: return state;
    }
}

export default Messages;