import {
  ASYNC_START,
  ASYNC_END,
  LOGIN,
  LOGOUT,
  IS_LOGGEDIN
} from '../constants/actionTypes';
import { notification } from 'antd';
import _ from 'lodash';
const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;
    action.payload.then(
      res => {


        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);


        if (_.has(action, 'callback')) {
          if (_.isFunction(_.get(action, 'callback'))) {
            var callback = _.get(action, 'callback');
            callback(action.payload);
          }
        }
        if (_.has(action, 'successNotification') && !_.get(action, 'successNotification')) {
          return;
        }

        if (action && action.payload && action.payload.data && action.payload.data.success) {
          notification.success({
            message: "Success",
            description: action.payload.data.message,
          });
        } else if (action && action.payload && action.payload.success) {
          notification.success({
            message: "Success",
            description: action.payload.message,
          });
        }
      },

      error => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        action.error = true;
        action.payload = error.response && error.response.body ? error.response.body : {};
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
        if (action.payload && action.payload.error && action.payload.error.message) {
          notification.error({
            message: 'Error',
            description:
              action.payload.error.message,
          });
        }
      }
    );

    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {
  if (action.type === IS_LOGGEDIN || action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem('userLoggedInStatus', action.payload.isLoggedIn);

    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem('userLoggedInStatus', '');

  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware }
