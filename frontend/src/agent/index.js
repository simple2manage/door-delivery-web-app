import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import { GlobalVariable } from "../config/generalConfig";
import request from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = GlobalVariable.MIDDLEWARE_URL;

const responseBody = res => res.body;



const isObject = obj => {
  return Object(obj) === obj;
};

const customHeaders = (req, headers) => {
  if (isObject(headers)) {
    for (let [key, value] of Object.entries(headers)) {
      req.header[key] = value;
    }
  }


  return req;
};

const additionalQueryParams = {};

const requests = {
  del: (url, params) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .query(params)
      .withCredentials()
      .then(responseBody),
  get: (url, params = {}, headers = {}) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .query(params)
      .use(req => {
        customHeaders(req, headers);
      })
      .withCredentials()
      .then(responseBody),
  put: (url, body, urlParams = {}) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .query(urlParams)
      .withCredentials()
      .then(responseBody),
  post: (url, body, params = {}) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .query({ ...additionalQueryParams, ...params })
      .withCredentials()
      .then(responseBody),
  formPost: (url, body, params = {}) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .query(params)
      .set("Content-Type", "multipart/form-data")
      .withCredentials()
      .then(responseBody)
};

const Auth = {
  middlewareConnect: () => requests.get("/"),
  current: () => requests.post("/isLoggedIn"),
  login: requestBody => requests.post("/login", requestBody),
  loginUser: requestBody => requests.post("/isLoggedIn/login", requestBody),
  logout: () => requests.post("/logout"),

};

const Categories = {
  create: (requestParams) => requests.post('/categories/create', requestParams),
  list: (requestParams) => requests.get('/categories/list', requestParams),
  view: (requestParams) => requests.get('/categories/view', requestParams),
  update: (bodyParams, urlParams) => requests.post('/categories/update', bodyParams, urlParams),
  change_status: (requestParams, urlParams) => requests.post('/categories/change-status', requestParams, urlParams),
  delete: (requestParams) => requests.post('/categories/delete', requestParams),
  upload_photo: (requestParams, urlParams) => requests.post('/categories/update-photo', requestParams, urlParams),

}

const Guests_crud = {
  guestList: (requestParams) => requests.get('/guests/list', requestParams),
  guestView: (requestParams) => requests.get('/guests/view', requestParams),
  change_status: (requestParams) => requests.post('/guests/change-status', requestParams),
  approve_status: (requestParams) => requests.post('/guests/approve-status', requestParams),
}

const Host_crud = {
  hostList: (requestParams) => requests.get('/hosts/list', requestParams),
  hostView: (requestParams) => requests.get('/hosts/view', requestParams),
  change_status: (requestParams) => requests.post('/hosts/change-status', requestParams),
  approve_status: (requestParams) => requests.post('/hosts/approve-status', requestParams),
}

const Coupon_crud = {

  couponView: (requestParams) => requests.get('/coupons/view', requestParams),
  change_status: (requestParams) => requests.post('/coupons/change-status', requestParams),
}
const Coupons = {
  create: (requestParams) => requests.post('/coupons/create', requestParams),
  update: (bodyParams, urlParams) => requests.post('/coupons/update', bodyParams, urlParams),
  list: (requestParams) => requests.get('/coupons/list', requestParams),
  delete: (requestParams) => requests.post('/coupons/delete', requestParams),

}
const Subscribers = {
  list: (requestParams) => requests.get('/subscriptions/list-subscribers', requestParams),
  view: (requestParams) => requests.get('/subscriptions/view-subscribers', requestParams),

}

const subscription_crud = {
  subscriptionCreate: (requestParams) => requests.post('/subscriptions/create', requestParams),
  subscriptionUpdate: (requestParams) => requests.post('/subscriptions/update', requestParams),
  subscriptionList: (requestParams) => requests.get('/subscriptions/list', requestParams),
  subscriptionView: (requestParams) => requests.get('/subscriptions/view', requestParams),
  change_status: (requestParams) => requests.post('/subscriptions/change-status', requestParams),
  approve_status: (requestParams) => requests.post('/subscriptions/approve-status', requestParams),
}
const Templates = {
  list_template: (requestParams) => requests.get('/experiences/templates/list', requestParams),
  list: (requestParams) => requests.get('/experiences/list', requestParams),
  experienceView: (requestParams) => requests.get('/experiences/view', requestParams),
  experienceTemplateView: (requestParams) => requests.get('/experiences/templates/view', requestParams),
  change_status: (requestParams) => requests.post('/experiences/templates/change-status', requestParams),
  approve_status: (requestParams) => requests.post('/experiences/templates/approve-status', requestParams),
  list_rating: (requestParams) => requests.get('/experiences/rating-list', requestParams),
  change_status_rating: (requestParams) => requests.post('/experiences/change-rating-status', requestParams),
  update_template: (bodyParams, urlParams) => requests.post('/experiences/templates/update', bodyParams, urlParams),
}
const Orders = {
  list: (requestParams) => requests.get('/orders/list', requestParams),
  orderView: (requestParams) => requests.get('/orders/view', requestParams),
  orderRefund: (requestParams) => requests.post('/experiences/cancel-order', requestParams),
}
const Transaction = {
  list: (requestParams) => requests.get('/transactions/list', requestParams),
  view: (requestParams) => requests.get('/transactions/view', requestParams),
}

const Package_crud = {
  package_create: (requestParams) => requests.post('/packages/create', requestParams),
  package_list: (requestParams) => requests.get('/packages/list', requestParams),
  package_view: (requestParams) => requests.get('/packages/view', requestParams),
  package_update: (bodyParams, urlParams) => requests.post('/packages/update', bodyParams, urlParams),
  package_change_status: (requestParams, urlParams) => requests.post('/packages/change-status', requestParams, urlParams),
}
const Badges = {
  create: (requestParams) => requests.post('/badges/create', requestParams),
  list: (requestParams) => requests.get('/badges/list', requestParams),
  view: (requestParams) => requests.get('/badges/view', requestParams),
  update: (bodyParams, urlParams) => requests.post('/badges/update', bodyParams, urlParams),
  change_status: (requestParams, urlParams) => requests.post('/badges/change-status', requestParams, urlParams),
}
const Payment = {
  payment_due: (requestParams) => requests.get('/experiences/payment-due', requestParams),
  payment_transfer: (requestParams) => requests.post('/experiences/payment-transfer', requestParams),
}
const Ratings = {
  ra_list: (requestParams) => requests.get('/experiences/rating-list', requestParams),
}
var token = null;
export default {
  Auth,
  Categories,
  Guests_crud,
  Host_crud,
  Coupon_crud,
  Coupons,
  Subscribers,
  subscription_crud,
  Templates,
  Orders,
  Transaction,
  Package_crud,
  Badges,
  Payment,
  Ratings,
  setToken: _token => {
    token = _token;
  }
};
