import {
    EXPERIENCE_LIST_TEMPLATE,
    EXPERIENCE_LIST,
    EXPERIENCE_GUEST_LIST,
    EXPERIENCE_VIEW,
    EXPERIENCE_TEMPLATE_VIEW,
    ORDER_VIEW,
    EXPERIENCE_CHANGE_STATUS,
    EXPERIENCE_APPROVE_STATUS,
    EXPERIENCE_RATING_LIST,
    RATING_CHANGE_STATUS,
    EXPERIENCE_TEMPLATE_UPDATE,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    experienceListTemplate: {},
    experienceList: {},
    experienceGuestList: {},
    experienceView: {},
    experienceTemplateView: {},
    orderView: {},
    experienceChangeStatus: {},
    experienceApproveStatus: {},
    experienceRatingList: {},
    ratingChangeStatus: {},
    experienceUpdateTemplate: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case EXPERIENCE_LIST_TEMPLATE:
            return {
                ...state,
                inListTemplateProgress: false,
                experienceListTemplate: action.error ? {} : action.payload
            };
        case EXPERIENCE_LIST:
            return {
                ...state,
                inExpeienceListProgress: false,
                experienceList: action.error ? {} : action.payload
            };
        case EXPERIENCE_GUEST_LIST:
            return {
                ...state,
                inExpeienceGuestListProgress: false,
                experienceGuestList: action.error ? {} : action.payload
            };

        case EXPERIENCE_VIEW:
            return {
                ...state,
                inExperienceViewProgress: false,
                experienceView: action.error ? {} : action.payload
            };

        case EXPERIENCE_TEMPLATE_VIEW:
            return {
                ...state,
                inExperienceTemplateViewProgress: false,
                experienceTemplateView: action.error ? {} : action.payload
            };

        case ORDER_VIEW:
            return {
                ...state,
                inOrderViewProgress: false,
                orderView: action.error ? {} : action.payload
            };

        case EXPERIENCE_CHANGE_STATUS:
            return {
                ...state,
                inExperienceChangeStatusProgress: false,
                experienceChangeStatus: action.error ? {} : action.payload
            };
        case EXPERIENCE_APPROVE_STATUS:
            return {
                ...state,
                inExperienceApproveStatusProgress: false,
                experienceApproveStatus: action.error ? {} : action.payload
            };
        case EXPERIENCE_RATING_LIST:
            return {
                ...state,
                inExperienceRatingListProgress: false,
                experienceRatingList: action.error ? {} : action.payload
            };
        case RATING_CHANGE_STATUS:
            return {
                ...state,
                inRatingChangeStatusProgress: false,
                ratingChangeStatus: action.error ? {} : action.payload
            };
        case EXPERIENCE_TEMPLATE_UPDATE:
            return {
                ...state,
                inExperienceTemplateUpdateProgress: false,
                experienceUpdateTemplate: action.error ? {} : action.payload
            };
        case ASYNC_START:
            if (action.subtype === EXPERIENCE_LIST_TEMPLATE)
                return { ...state, inListTemplateProgress: true };
            if (action.subtype === EXPERIENCE_LIST)
                return { ...state, inExpeienceListProgress: true };
            if (action.subtype === EXPERIENCE_GUEST_LIST)
                return { ...state, inExpeienceGuestListProgress: true };
            if (action.subtype === EXPERIENCE_VIEW)
                return { ...state, inExperienceViewProgress: true };
            if (action.subtype === EXPERIENCE_TEMPLATE_VIEW)
                return { ...state, inExperienceTemplateViewProgress: true };
            if (action.subtype === ORDER_VIEW)
                return { ...state, inOrderViewProgress: true };
            if (action.subtype === EXPERIENCE_CHANGE_STATUS)
                return { ...state, inExperienceChangeStatusProgress: true };
            if (action.subtype === EXPERIENCE_APPROVE_STATUS)
                return { ...state, inExperienceApproveStatusProgress: true };
            if (action.subtype === EXPERIENCE_RATING_LIST)
                return { ...state, inExperienceRatingListProgress: true };
            if (action.subtype === RATING_CHANGE_STATUS)
                return { ...state, inRatingChangeStatusProgress: true };
            if (action.subtype === EXPERIENCE_TEMPLATE_UPDATE)
                return { ...state, inExperienceTemplateUpdateProgress: true };

        default:
            return state;
    }
}