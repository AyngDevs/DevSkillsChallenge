import { MEMBERS_FETCHED, MEMBER_ADDED, } from '../constants/members';

const initial = {
    data: [],
    fail: false,
};

const members = (state = initial, action) => {
    switch (action.type) {
        case MEMBERS_FETCHED:
            return {
                ...state,
                data: action.members,
                fail: false,
            };
        case MEMBER_ADDED:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.member,
                ],
                fail: false,
            };
        default:
            return state;
    }; //fin del 'switch-case'
}; //fin del reducer 'members'
export default members;