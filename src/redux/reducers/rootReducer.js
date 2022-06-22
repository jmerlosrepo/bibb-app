import { combineReducers } from "redux"
import aboutMeReducer from "./aboutMeReducer"
import addressInfoReducer from "./addressInfoReducer"
import certificatesReducer from './certificatesReducer'
import educationReducer from "./educationReducer"
import languagesReducer from './languagesReducer'
import logInUserReducer from "./logInReducer"
import majorSkillsReducer from './majorSkillsReducer'
import navigationReducer from "./navigationReducer"
import personalInfoReducer from "./personalInfoReducer"
import professionalInfoReducer from './professionalInfoReducer'
import socialMediaReducer from './socialMediaReducer'
import strengthReducer from "./strengthReducer"
import userReducer from "./userReducer"
import userSessionReducer from "./userSessionReducer"

const rootReducer = combineReducers({
    aboutMeReducer,
    addressInfoReducer,
    certificatesReducer,
    educationReducer,
    languagesReducer,
    logInUserReducer,
    majorSkillsReducer,
    navigationReducer,
    personalInfoReducer,
    professionalInfoReducer,
    socialMediaReducer,
    strengthReducer,
    userReducer,
    userSessionReducer
})

export default rootReducer