import { handleActions } from 'redux-actions';
import { LOGIN, TEST } from './actions';
const initialState = {
    name: undefined,
    pass: undefined,
    test: undefined,
};

const login = handleActions(
    {
        [LOGIN]: (state, action) => {
            console.log(
                'Login Reducer : ',
                state,
                action.payload.name,
                action.payload.pass
            );
            return { name: action.payload.name, pass: action.payload.pass };
        },
        [TEST]: (state, action) => {
            console.log(
                'Test Reducer : ',
                state,
                action.payload.name,
                action.payload.pass
            );
            return { test: action.payload.name };
        },
    },
    initialState
);

export default login;
