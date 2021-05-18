import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  IS_LOGGEDIN,
} from '../constants/actionTypes';

const defaultState = {
  token: null,
  isLoggedIn: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload : null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/login', isLoggedIn: false, currentUser: null };
    case IS_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: action.error ? null : action.payload.isLoggedIn,
        currentUser: action.error ? null : action.payload,
      };
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : action.payload.isLoggedIn ? '/home' : '/login',
        isLoggedIn: action.error ? false : action.payload.isLoggedIn,
        currentUser: action.error ? null : action.payload
      };
    case LOGIN_PAGE_UNLOADED:
      return { ...state }
    default:
      return state;
  }
};
