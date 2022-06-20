import { combineReducers } from "redux"
import userReducer from "./userReducer"
import logInUserReducer from "./logInReducer"
import nagivagtionReducer from "./navigetionReducer"
import strengthReducer from "./strengthReducer"
import userSessionReducer from "./userSessionReducer"

const rootReducer = combineReducers({
    userReducer,
    logInUserReducer,
    nagivagtionReducer,
    strengthReducer,
    userSessionReducer
})

export default rootReducer