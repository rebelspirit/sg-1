import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import AppReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(AppReducer, compose(applyMiddleware(thunk),
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : noop => noop
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
