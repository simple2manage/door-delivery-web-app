import {
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  ASYNC_START,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.error : null
      };
      case LOGIN_PAGE_UNLOADED:
      return {};
      case ASYNC_START:
        if (action.subtype === LOGIN ) {
          return { ...state, inProgress: true };
        }
        break;
    default:
      return state;
  }
    return state;
};
