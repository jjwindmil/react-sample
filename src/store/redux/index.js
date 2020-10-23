import { combineReducers } from 'redux';
import counter from './counter';
import counterByReduxAction from './counter_reduxAction';
import login from './login';

export default combineReducers({
    counter,
    counterByReduxAction,
    login,
});
