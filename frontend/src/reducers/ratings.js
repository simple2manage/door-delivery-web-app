import {
    RATINGS_LIST,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    ratingList: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case RATINGS_LIST:
            return {
                ...state,
                inRatingListProgress: false,
                ratingList: action.error ? {} : action.payload
            };
        case ASYNC_START:
            if (action.subtype === RATINGS_LIST)
                return { ...state, inRatingListProgress: true };
        default:
            return state;
    }
}