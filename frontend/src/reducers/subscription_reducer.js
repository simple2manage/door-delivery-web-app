import {
    SUBSCRIPTION_CREATE,
    SUBSCRIPTION_UPDATE,
    SUBSCRIPTION_LIST,
    SUBSCRIPTION_VIEW,
    SUBSCRIPTION_CHANGE_STATUS,
    SUBSCRIPTION_APPROVE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    subscriptionCreate : {},
    subscriptionUpdate : {},
    subscriptionList :{},
    subscriptionView : {},
    
    subscriptionChangeStatus: {},
    subscriptionApproveStatus: {},
    
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SUBSCRIPTION_CREATE:
            return {
                ...state,
                inSubscriptionCreateProgress: false,
                subscriptionCreate: action.error ? {} : action.payload
            };

            case SUBSCRIPTION_UPDATE:
            return {
                ...state,
                inSubscriptionUpdateProgress: false,
                subscriptionUpdate: action.error ? {} : action.payload
            };

        case SUBSCRIPTION_LIST:
            return {
                ...state,
                inSubscriptionListProgress: false,
                subscriptionList: action.error ? {} : action.payload
            };
        case SUBSCRIPTION_VIEW:
            return {
                ...state,
                inSubscriptionViewProgress: false,
                subscriptionView: action.error ? {} : action.payload
            };
        
        case SUBSCRIPTION_CHANGE_STATUS:
            return {
                ...state,
                inSubscriptionChangeStatusProgress: false,
                subscriptionChangeStatus: action.error ? {} : action.payload
            };
            case SUBSCRIPTION_APPROVE_STATUS:
                return {
                    ...state,
                    inSubscriptionApproveStatusProgress: false,
                    subscriptionApproveStatus: action.error ? {} : action.payload
                };

        case ASYNC_START:
            
            if (action.subtype === SUBSCRIPTION_LIST)
                return { ...state, inSubscriptionListProgress: true };
            if (action.subtype === SUBSCRIPTION_VIEW)
                return { ...state, inSubscriptionViewProgress: true };
         
            if (action.subtype === SUBSCRIPTION_CHANGE_STATUS)
                return { ...state, inSubscriptionChangeStatusProgress: true };
                if (action.subtype === SUBSCRIPTION_APPROVE_STATUS)
                return { ...state, inSubscriptionApproveStatusProgress: true };
                if (action.subtype === SUBSCRIPTION_CREATE)
                return { ...state, inSubscriptionCreateProgress: true };
                if (action.subtype === SUBSCRIPTION_UPDATE)
                return { ...state, inSubscriptionUpdateProgress: true };
                default:
                    return state;
    }
}