import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, } from '../constants/session';

const simulateSleep = () => new Promise(resolve => setTimeout(resolve, 1500));

export const getUser = () => async (dispatch) => {
    const result = window.localStorage.getItem("jwt");
    const credentials = JSON.parse(result);
    credentials?.username && dispatch({ type: LOGIN_SUCCESS, user: credentials.username, });
    return credentials?.username ? true : false;
}; //end of the function action 'login'

export const login = ({ username, password, }) => async (dispatch) => {
    dispatch({ type: LOGGING_IN, });
    await simulateSleep();
    const response = await fetch('http://localhost:8081/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, }),
    });
    if (response.status !== 200) {
        dispatch({ type: LOGIN_FAIL, });
        return;
    };
    const result = await response.json();
    result.username && window.localStorage.setItem("jwt", JSON.stringify(result));
    result.username && dispatch({ type: LOGIN_SUCCESS, user: result.username, });
    !result.username && dispatch({ type: LOGIN_FAIL, });
    return result.username ? true : false;
}; //end of the function action 'login'

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGGING_IN, });
    await simulateSleep();
    window.localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT, });
}; //end of the function action 'logout'