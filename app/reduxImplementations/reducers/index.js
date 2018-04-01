import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboard from './dashboard';

export default () => {
    return combineReducers({
        'routing': routerReducer,
        'dashboard': dashboard
    })
}