import { combineReducers } from "redux"
import educationReducer from "./educationReducer"
import logInUserReducer from "./logInReducer"
import nagivagtionReducer from "./navigetionReducer"
import strengthReducer from "./strengthReducer"
import userReducer from "./userReducer"
import userSessionReducer from "./userSessionReducer"

const rootReducer = combineReducers({
    educationReducer,
    logInUserReducer,
    nagivagtionReducer,
    strengthReducer,
    userReducer,
    userSessionReducer
})

export default rootReducer