import {
    PACKAGE_CREATE,
    PACKAGE_LIST,
    PACKAGE_VIEW,
    PACKAGE_UPDATE,
    PACKAGE_CHANGE_STATUS,
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
    packageCreate: {},
    packageList: {},
    packageView: {},
    packageUpdate: {},
    packageChangeStatus: {},
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case PACKAGE_CREATE:
            return {
                ...state,
                inPackageCreateProgress: false,
                packageCreate: action.error ? {} : action.payload
            };
        case PACKAGE_LIST:
            return {
                ...state,
                inPackageListProgress: false,
                packageList: action.error ? {} : action.payload
            };
        case PACKAGE_VIEW:
            return {
                ...state,
                inPackageViewProgress: false,
                packageView: action.error ? {} : action.payload
            };
        case PACKAGE_UPDATE:
            return {
                ...state,
                inPackageUpdateProgress: false,
                packageUpdate: action.error ? {} : action.payload
            };
        case PACKAGE_CHANGE_STATUS:
            return {
                ...state,
                inPackageChangeStatusProgress: false,
                packageChangeStatus: action.error ? {} : action.payload
            };

        case ASYNC_START:
            if (action.subtype === PACKAGE_CREATE)
                return { ...state, inPackageCreateProgress: true };
            if (action.subtype === PACKAGE_LIST)
                return { ...state, inPackageListProgress: true };
            if (action.subtype === PACKAGE_VIEW)
                return { ...state, inPackageViewProgress: true };
            if (action.subtype === PACKAGE_UPDATE)
                return { ...state, inPackageUpdateProgress: true };
            if (action.subtype === PACKAGE_CHANGE_STATUS)
                return { ...state, inPackageChangeStatusProgress: true };
        default:
            return state;
    }
}