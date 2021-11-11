import { combineReducers, } from 'redux';
import session from './session';
import members from './members';

export default combineReducers({
    session,
    members,
});