import {
    ORDER_LIST,
    ORDER_VIEW_ID,
    ORDER_REFUND,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    orderList: {},
    orderView: {},
    orderRefund: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case ORDER_LIST:
            return {
                ...state,
                inOrderListProgress: false,
                orderList: action.error ? {} : action.payload
            };
        case ORDER_VIEW_ID:
            return {
                ...state,
                inOrderViewProgress: false,
                orderView: action.error ? {} : action.payload
            };
            case ORDER_REFUND:
            return {
                ...state,
                inOrderRefundProgress: false,
                orderRefund: action.error ? {} : action.payload
            };
       

        case ASYNC_START:
            if (action.subtype === ORDER_LIST)
                return { ...state, inOrderListProgress: true };
            if (action.subtype === ORDER_VIEW_ID)
                return { ...state, inOrderViewProgress: true };
                if (action.subtype === ORDER_REFUND)
                return { ...state, inOrderRefundProgress: true };
        default:
            return state;
    }
}