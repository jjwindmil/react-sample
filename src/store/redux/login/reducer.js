import { handleActions } from 'redux-actions';
import { LOGIN, LOGIN_SUCCESS, TEST } from './actions';
const initialState = {
    name: undefined,
    pass: undefined,
    test: undefined,
    result: false,
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
            return { test: action.payload.name };
        },
        [LOGIN_SUCCESS]: (state, action) => {
            console.log('Login Reducer : ', state, action.payload.result);
            return { result: action.payload.result };
        },
    },
    initialState
);

export default login;
