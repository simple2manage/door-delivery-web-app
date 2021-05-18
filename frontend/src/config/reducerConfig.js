import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from '../reducers/auth';
import common from '../reducers/common';
import categories from '../reducers/categories';
import guest_reducer from '../reducers/guest_reducer';
import host_reducer from '../reducers/host_reducer';
import coupon_reducer from '../reducers/coupon_reducer';
import coupons from '../reducers/coupons';
import subscribers from '../reducers/subscribers';
import subscription_reducer from '../reducers/subscription_reducer';
import experience from '../reducers/experience';
import transaction from '../reducers/transaction';
import packages from '../reducers/package';
import badges from '../reducers/badges';
import payment from '../reducers/payment';
import order from '../reducers/order';
import ratings from '../reducers/ratings';

import { LOGOUT } from '../constants/actionTypes';

import { createBrowserHistory as createHistory } from 'history';
import SecureLS from "secure-ls";

export const history = createHistory()
const lStorage = new SecureLS();

const appReducer = combineReducers({
  auth,
  common,
  categories,
  guest_reducer,
  host_reducer,
  coupon_reducer,
  coupons,
  subscribers,
  subscription_reducer,
  experience,
  transaction,
  badges,
  router: connectRouter(history),
  packages,
  payment,
  order,
  ratings
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) { 
    const { router, common } = state;
    state = { router, common };
    lStorage.clear()
  }
  return appReducer(state, action)
}

export default rootReducer;