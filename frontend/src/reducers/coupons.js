import {
    COUPON_CREATE,
    COUPON_LIST,
    COUPON_UPDATE,
    COUPON_DELETE,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    couponsCreate:{},
    couponsList :{},
    couponsUpdate: {},
    couponsDelete : {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case COUPON_CREATE:
            return {
                ...state,
                inCouponCreateProgress: false,
                couponsCreate: action.error ? {} : action.payload
            };
        case COUPON_LIST:
            return {
                ...state,
                inCouponListProgress: false,
                couponsList: action.error ? {} : action.payload
            };
        case COUPON_UPDATE:
            return {
                ...state,
                inCouponUpdateProgress: false,
                couponsUpdate: action.error ? {} : action.payload
            };
        case COUPON_DELETE:
            return {
                ...state,
                inCouponDeleteProgress: false,
                couponsDelete: action.error ? {} : action.payload
            };

        case ASYNC_START:
            if (action.subtype === COUPON_CREATE)
                return { ...state, inCouponCreateProgress: true };
            if (action.subtype === COUPON_LIST)
                return { ...state, inCouponListProgress: true };
            if (action.subtype === COUPON_UPDATE)
                return { ...state, inCouponUpdateProgress: true };
            if (action.subtype === COUPON_DELETE)
                return { ...state, inCouponDeleteProgress: true };
                default:
                    return state;
    }
}