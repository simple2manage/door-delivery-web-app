import {
    BADGES_LIST,
    BADGES_VIEW,
    BADGES_CREATE,
    BADGES_UPDATE,
    BADGES_CHANGE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    badgesList: {},
    badgesView: {},
    badgesCreate: {},
    badgesUpdate: {},
    badgesChangeStatus: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case BADGES_LIST:
            return {
                ...state,
                inBadgesListProgress: false,
                badgesList: action.error ? {} : action.payload
            };
        case BADGES_VIEW:
            return {
                ...state,
                inBadgesViewProgress: false,
                badgesView: action.error ? {} : action.payload
            };
        case BADGES_CREATE:
            return {
                ...state,
                inBadgesCreateProgress: false,
                badgesCreate: action.error ? {} : action.payload
            };
        case BADGES_UPDATE:
            return {
                ...state,
                inBadgesUpdateProgress: false,
                badgesUpdate: action.error ? {} : action.payload
            };
        case BADGES_CHANGE_STATUS:
            return {
                ...state,
                inBadgesChangeStatusProgress: false,
                badgesChangeStatus: action.error ? {} : action.payload
            };

        case ASYNC_START:
            if (action.subtype === BADGES_LIST)
                return { ...state, inBadgesListProgress: true };
            if (action.subtype === BADGES_VIEW)
                return { ...state, inBadgesViewProgress: true };
            if (action.subtype === BADGES_CREATE)
                return { ...state, inBadgesCreateProgress: true };
            if (action.subtype === BADGES_UPDATE)
                return { ...state, inBadgesUpdateProgress: true };
            if (action.subtype === BADGES_CHANGE_STATUS)
                return { ...state, inBadgesChangeStatusProgress: true };
        default:
            return state;
    }
}