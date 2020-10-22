import { combineReducers } from 'redux';
import counter from './counter';
import counterByReduxAction from './counter_reduxAction';

export default combineReducers({
    counter,
    counterByReduxAction,
});