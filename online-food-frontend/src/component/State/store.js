import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";


const rooteReduce = combineReducers({
    auth: authReducer, 
})

export const store = legacy_createStore(rooteReduce, applyMiddleware(thunk));

