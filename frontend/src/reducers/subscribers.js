import {
    SUBSCRIBERS_LIST,
    SUBSCRIBERS_VIEW,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    subscribersList : {},
    subscribersView : {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SUBSCRIBERS_LIST:
            return {
                ...state,
                inSubscribersListProgress: false,
                subscribersList: action.error ? {} : action.payload
            };
        case SUBSCRIBERS_VIEW:
            return {
                ...state,
                inSubscribersViewProgress: false,
                subscribersView: action.error ? {} : action.payload
            };

        case ASYNC_START:
            if (action.subtype === SUBSCRIBERS_LIST)
                return { ...state, inSubscribersListProgress: true };
            if (action.subtype === SUBSCRIBERS_VIEW)
                return { ...state, inSubscribersViewProgress: true };
        default:
            return state;
    }
}