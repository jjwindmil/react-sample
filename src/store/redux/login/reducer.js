import { handleActions } from 'redux-actions';

const initialState = {
    name : undefined,
    pass : undefined,
};

const login = handleActions({
    [LOGIN] : (state, action) =>({name:action.name}),

},initialState
);

export default login;