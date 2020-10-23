import { createAction } from 'redux-actions';

export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const TEST = 'login/TEST';

export const login = createAction(LOGIN);
export const loginSucess = createAction(LOGIN_SUCCESS);
export const test = createAction(TEST);
