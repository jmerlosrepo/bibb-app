import { combineReducers } from "redux"
import userReducer from "./userReducer"
import logInUserReducer from "./logInReducer"
import nagivagtionReducer from "./navigetionReducer"
import strengthReducer from "./strengthReducer"

const rootReducer = combineReducers({ 
    userReducer, 
    logInUserReducer,
    nagivagtionReducer,
    strengthReducer
})

export default rootReducer