import {
    TRANSACTION_LIST,
    TRANSACTION_VIEW,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    transactionList: {},
    transactionView: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case TRANSACTION_LIST:
            return {
                ...state,
                inTransactionListProgress: false,
                transactionList: action.error ? {} : action.payload
            };
        case TRANSACTION_VIEW:
            return {
                ...state,
                inTransactionViewProgress: false,
                transactionView: action.error ? {} : action.payload
            };
        case ASYNC_START:
            if (action.subtype === TRANSACTION_LIST)
                return { ...state, inTransactionListProgress: true };
            if (action.subtype === TRANSACTION_VIEW)
                return { ...state, inTransactionViewProgress: true };
        default:
            return state;
    }
}