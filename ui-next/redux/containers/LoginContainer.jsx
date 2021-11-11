import { connect, } from 'react-redux';
import Login from '../components/Login';

import { login, getUser, } from '../actions/sessionActions';
import { getSession, } from '../selectors/sessionSelectors';

const mapStateToProps = (state, ownProps) => {
    return {
        session: getSession(state),
    };
}; //cierre del 'mapStateToProps'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUser: (params) => dispatch(getUser(params)),
        login: (params) => dispatch(login(params)),
    };
}; //cierre del 'mapDispatchToProps'

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;