import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

export default (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = Object.keys(allUserMsgs).length;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      }
    default:
      return state;
  }
}