import { applyMiddleware, createStore, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { initial, } from '../reducers/session';

const logger = store => next => action => {
    if (!window) return;
    console.group(`${action.type}`);
    console.log('current state', store.getState());
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
}; //cierre del 'logger'

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, logger));
export default store;