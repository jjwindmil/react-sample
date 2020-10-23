import { createAction } from 'redux-actions';

export const INCREASE = 'counterAction/INCREASE';
export const DECREASE = 'counterAction/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
