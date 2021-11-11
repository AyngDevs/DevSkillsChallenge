import { MEMBERS_FETCHED, MEMBER_ADDED, } from '../constants/members';

const getCredentials = () => {
    const jwt = window.localStorage.getItem("jwt");
    const credentials = jwt ? JSON.parse(jwt) : {};
    return credentials;
}; //end of the function 'getCredentials'

export const fetchMembers = () => async (dispatch) => {
    const credentials = getCredentials();
    const response = await fetch('http://localhost:8081/api/members', {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Jwt ${credentials.token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
    });
    const result = await response.json();
    Array.isArray(result) && dispatch({ type: MEMBERS_FETCHED, members: result, });
}; //end of the function action 'fetchMembers'

export const create = (member) => async (dispatch) => {
    const credentials = getCredentials();
    const response = await fetch('http://localhost:8081/api/members', {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Jwt ${credentials.token}`,
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(member),
    }).catch(err => console.log('err', err)); //end of the 'try-catch'
    const item = await response.json();
    if (response.status === 200)
        dispatch({ type: MEMBER_ADDED, member: item, });
}; //end of the function action 'create'