import { applyMiddleware, combineReducers, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import weather from './Search/reducers/searchReducer';

const reducer = combineReducers({
    weather
});

export default createStore(reducer, applyMiddleware(promise()));

