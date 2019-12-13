import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import appReducers from '../src/Reducers/user/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    // tích hợp redux trong chrome
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)//chèn thêm hành động trước khi dispatch
);


ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
