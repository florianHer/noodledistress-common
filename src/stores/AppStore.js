import { createStore, combineReducers } from 'redux'
import Login from '../reducers/Users/index'
import Call from '../reducers/Calls/index'

const reducers = combineReducers({
    user:Login,
    call:Call
});

const store = createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;