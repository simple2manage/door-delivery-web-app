import {
    GUEST_LIST,
    GUEST_VIEW,
    GUEST_CHANGE_STATUS,
    GUEST_APPROVE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    
    guestList :{},
    guestView : {},
    
    guestChangeStatus: {},
    guestApproveStatus: {},
    
}
export default (state = defaultState, action) => {
    switch (action.type) {
       
        case GUEST_LIST:
            return {
                ...state,
                inGuestListProgress: false,
                guestList: action.error ? {} : action.payload
            };
        case GUEST_VIEW:
            return {
                ...state,
                inGuestViewProgress: false,
                guestView: action.error ? {} : action.payload
            };
        
        case GUEST_CHANGE_STATUS:
            return {
                ...state,
                inGuestChangeStatusProgress: false,
                guestChangeStatus: action.error ? {} : action.payload
            };
            case GUEST_APPROVE_STATUS:
                return {
                    ...state,
                    inGuestApproveStatusProgress: false,
                    guestApproveStatus: action.error ? {} : action.payload
                };

        case ASYNC_START:
            
            if (action.subtype === GUEST_LIST)
                return { ...state, inGuestListProgress: true };
            if (action.subtype === GUEST_VIEW)
                return { ...state, inGuestViewProgress: true };
         
            if (action.subtype === GUEST_CHANGE_STATUS)
                return { ...state, inGuestChangeStatusProgress: true };
                if (action.subtype === GUEST_APPROVE_STATUS)
                return { ...state, inGuestApproveStatusProgress: true };
                default:
                    return state;
    }
}