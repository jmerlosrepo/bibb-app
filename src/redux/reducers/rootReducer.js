import { combineReducers } from "redux"
import certificatesReducer from './certificatesReducer'
import educationReducer from "./educationReducer"
import languagesReducer from './languagesReducer'
import logInUserReducer from "./logInReducer"
import majorSkillsReducer from './majorSkillsReducer'
import nagivagtionReducer from "./navigetionReducer"
import professionalInfoReducer from './professionalInfoReducer'
import socialMediaReducer from './socialMediaReducer'
import strengthReducer from "./strengthReducer"
import userReducer from "./userReducer"
import userSessionReducer from "./userSessionReducer"

const rootReducer = combineReducers({
    certificatesReducer,
    educationReducer,
    languagesReducer,
    logInUserReducer,
    majorSkillsReducer,
    nagivagtionReducer,
    professionalInfoReducer,
    socialMediaReducer,
    strengthReducer,
    userReducer,
    userSessionReducer
})

export default rootReducer