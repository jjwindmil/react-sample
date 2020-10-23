import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';

//createStore와 rootReducer 호출
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/saga';
// saga 미들웨어를 생성합니다.
const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// 그리고 saga를 실행합니다.
sagaMiddleware.run(rootSaga);
//console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
