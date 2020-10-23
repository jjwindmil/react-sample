import { createAction } from 'redux-actions';

export const LOGIN = 'login/LOGIN';
export const TEST = 'login/TEST';

export const login = createAction(LOGIN);
export const test = createAction(TEST);
