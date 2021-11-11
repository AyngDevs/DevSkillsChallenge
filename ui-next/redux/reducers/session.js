import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, } from '../constants/session';

export const initial = {
    loading: false,
    fail: false,
    user: null,
    auth: null,
};

const session = (state = initial, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state, loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state, loading: false, fail: false, user: action.user, auth: action.auth,
            };
        case LOGIN_FAIL:
            return {
                ...state, loading: false, fail: true, user: null,
            };
        case LOGOUT:
            return {
                ...state, loading: false, fail: false, user: null,
            };
        default:
            return state;
    }; //end of the switch-case'
}; //end of the reducer 'session'
export default session;