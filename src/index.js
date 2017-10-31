import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import App from './App/components/App';
import weather from './Search/reducers/searchReducer';
import registerServiceWorker from './registerServiceWorker';
import promise from 'redux-promise';

const appReducer = combineReducers({
    weather
});

let store = createStore(appReducer, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
