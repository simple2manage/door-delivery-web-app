import {
    PAYMENT_DUE,
    PAYMENT_TRANSFER,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    paymentDue: {},
    paymentTransfer: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case PAYMENT_DUE:
            return {
                ...state,
                inPaymentDueProgress: false,
                paymentDue: action.error ? {} : action.payload
            };
        case PAYMENT_TRANSFER:
            return {
                ...state,
                inPaymentTransferProgress: false,
                paymentTransfer: action.error ? {} : action.payload
            };
       

        case ASYNC_START:
            if (action.subtype === PAYMENT_DUE)
                return { ...state, inPaymentDueProgress: true };
            if (action.subtype === PAYMENT_TRANSFER)
                return { ...state, inPaymentTransferProgress: true };
        default:
            return state;
    }
}