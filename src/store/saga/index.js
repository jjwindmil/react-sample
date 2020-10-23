import { all, fork, takeEvery } from 'redux-saga/effects';
//saga리스트
import * as testSaga from './testSaga';
import * as loginSaga from './loginSaga';
//action리스트
import * as loginActions from 'store/redux/login/actions';
// all 함수를 통해 Saga들을 하나로 묶어줄수 있다.
export default function* rootSaga() {
    yield all([fork(test), fork(login)]);
}
function* test() {
    yield takeEvery(loginActions.test, testSaga.ageUpAsync);
}
function* login() {
    yield takeEvery(loginActions.login, loginSaga.loginRequest);
}
