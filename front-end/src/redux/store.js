import setting from  './reducers/settings';
import auth from './reducers/auth';
import error from './reducers/errors'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';


const reducer = combineReducers({auth: auth, setting: setting, error: error});
const store = createStore(reducer, {}, applyMiddleware(thunk));
export default store;