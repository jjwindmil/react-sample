import { delay, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSucess } from 'store/redux/login/actions';
function getLoginRequest(loginReq) {
    /*
    return axios
        .get('/login', {
            name: loginReq.name,
            pass: loginReq.pass,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        */
    return axios
        .post('/login', {
            name: loginReq.name,
            pass: loginReq.pass,
        })
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}
export function* loginRequest(param) {
    //yield delay(4000);
    console.log('LoginRequest : ', param.payload.name, param.payload.pass);
    const loginParam = {
        name: param.payload.name,
        pass: param.payload.pass,
    };
    const loginResult = yield call(getLoginRequest, loginParam);
    yield put(loginSucess(loginResult));
}
