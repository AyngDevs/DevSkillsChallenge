import { connect, } from 'react-redux';
import Members from '../components/Members';

import { getSession, } from '../selectors/sessionSelectors';
import { getMembers, } from '../selectors/membersSelectors';

import { logout, } from '../actions/sessionActions';
import { fetchMembers, create, } from '../actions/membersActions';

const mapStateToProps = (state, ownProps) => {
    return {
        session: getSession(state),
        members: getMembers(state),
    };
}; //cierre del 'mapStateToProps'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchMembers: (params) => dispatch(fetchMembers(params)),
        create: (params) => dispatch(create(params)),
        logout: (params) => dispatch(logout(params)),
    };
}; //cierre del 'mapDispatchToProps'

const MembersContainer = connect(mapStateToProps, mapDispatchToProps)(Members);
export default MembersContainer;