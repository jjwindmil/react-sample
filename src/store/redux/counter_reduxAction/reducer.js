import { handleActions } from 'redux-actions';
import { INCREASE, DECREASE } from './actions';

const initialState = {
    number: 0,
};

const counterByReduxAction = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

export default counterByReduxAction;
