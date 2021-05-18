import {
    CATEGORY_CREATE,
    CATEGORY_LIST,
    CATEGORY_VIEW,
    CATEGORY_UPDATE,
    CATEGORY_CHANGE_STATUS,
    CATEGORY_DELETE,
    UPLOAD_PHOTO,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    categoriesCreate: {},
    categoriesList: {},
    categoriesView: {},
    categoriesUpdate: {},
    categoriesChangeStatus: {},
    categoriesDelete: {},
    uploadPhoto: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CATEGORY_CREATE:
            return {
                ...state,
                inCategoryCreateProgress: false,
                categoriesCreate: action.error ? {} : action.payload
            };
        case CATEGORY_LIST:
            return {
                ...state,
                inCategoryListProgress: false,
                categoriesList: action.error ? {} : action.payload
            };
        case CATEGORY_VIEW:
            return {
                ...state,
                inCategoryViewProgress: false,
                categoriesView: action.error ? {} : action.payload
            };
        case CATEGORY_UPDATE:
            return {
                ...state,
                inCategoryUpdateProgress: false,
                categoriesUpdate: action.error ? {} : action.payload
            };
        case CATEGORY_CHANGE_STATUS:
            return {
                ...state,
                inCategoryChangeStatusProgress: false,
                categoriesChangeStatus: action.error ? {} : action.payload
            };
        case CATEGORY_DELETE:
            return {
                ...state,
                inCategoryDeleteProgress: false,
                categoriesDelete: action.error ? {} : action.payload
            };
            case UPLOAD_PHOTO:
                return {
                    ...state,
                    inPhotoUploadProgress: false,
                    uploadPhoto: action.error ? {} : action.payload
                };

        case ASYNC_START:
            if (action.subtype === CATEGORY_CREATE)
                return { ...state, inCategoryCreateProgress: true };
            if (action.subtype === CATEGORY_LIST)
                return { ...state, inCategoryListProgress: true };
            if (action.subtype === CATEGORY_VIEW)
                return { ...state, inCategoryViewProgress: true };
            if (action.subtype === CATEGORY_UPDATE)
                return { ...state, inCategoryUpdateProgress: true };
            if (action.subtype === CATEGORY_CHANGE_STATUS)
                return { ...state, inCategoryChangeStatusProgress: true };
            if (action.subtype === CATEGORY_DELETE)
                return { ...state, inCategoryDeleteProgress: true };
                if (action.subtype === UPLOAD_PHOTO)
                return { ...state, inPhotoUploadProgress: true };
        default:
            return state;
    }
}