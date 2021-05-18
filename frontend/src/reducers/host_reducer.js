import {
    HOST_LIST,
    HOST_VIEW,
    HOST_CHANGE_STATUS,
    HOST_APPROVE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    
    hostList :{},
    hostView : {},
    
    hostChangeStatus: {},
    hostApproveStatus: {},
    
}
export default (state = defaultState, action) => {
    switch (action.type) {
       
        case HOST_LIST:
            return {
                ...state,
                inHostListProgress: false,
                hostList: action.error ? {} : action.payload
            };
        case HOST_VIEW:
            return {
                ...state,
                inHostViewProgress: false,
                hostView: action.error ? {} : action.payload
            };
        
        case HOST_CHANGE_STATUS:
            return {
                ...state,
                inHostChangeStatusProgress: false,
                hostChangeStatus: action.error ? {} : action.payload
            };
            case HOST_APPROVE_STATUS:
                return {
                    ...state,
                    inHostApproveStatusProgress: false,
                    hostApproveStatus: action.error ? {} : action.payload
                };

        case ASYNC_START:
            
            if (action.subtype === HOST_LIST)
                return { ...state, inHostListProgress: true };
            if (action.subtype === HOST_VIEW)
                return { ...state, inHostViewProgress: true };
         
            if (action.subtype === HOST_CHANGE_STATUS)
                return { ...state, inHostChangeStatusProgress: true };
                if (action.subtype === HOST_APPROVE_STATUS)
                return { ...state, inHostApproveStatusProgress: true };
                default:
                    return state;
    }
}