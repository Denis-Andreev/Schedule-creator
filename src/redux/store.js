import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from "redux-thunk";

import {reducer as formReducer} from 'redux-form'
import {userReducer} from "./user-reducer";
import {scheduleReducer} from "./schedule-reducer";

const reducers = combineReducers({
    user: userReducer,
    form: formReducer,
    schedule: scheduleReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
window.store = store;

export default store;