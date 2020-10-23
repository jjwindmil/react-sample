import { delay } from 'redux-saga/effects';

export function* ageUpAsync() {
    yield delay(4000);
    console.log('Test');
}
