import {
    COUPON_VIEW,
    COUPON_CHANGE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    
    
    couponView : {},
    
    couponChangeStatus: {},
    
    
}

export default (state = defaultState, action) => {
    
    switch (action.type) {
       
       
        case COUPON_VIEW:
            return {
                ...state,
                inCouponViewProgress: false,
                couponView: action.error ? {} : action.payload
            };
        
        case COUPON_CHANGE_STATUS:
            return {
                ...state,
                inCouponChangeStatusProgress: false,
                couponChangeStatus: action.error ? {} : action.payload
            };
          

        case ASYNC_START:
            
          
            if (action.subtype === COUPON_VIEW)
                return { ...state, inCouponViewProgress: true };
         
            if (action.subtype === COUPON_CHANGE_STATUS)
                return { ...state, inCouponChangeStatusProgress: true };
                
                default:
                    return state;
                    
    }
    
}