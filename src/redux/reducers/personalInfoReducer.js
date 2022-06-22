import { GET_PERSONAL_INFO, SAVE_PERSONAL_INFO, SAVE_TEMP_PERSONAL_INFO } from '../actions/constants'
import { personalInfo } from "../../models/personaInfoModel"
const initialPersonalInfoState = [personalInfo]

const personalInfoReducer = (state = initialPersonalInfoState, action) => {
    switch (action.type) {
        case GET_PERSONAL_INFO:
            return action.payload
        case SAVE_PERSONAL_INFO:
            return [...state, action.payload]
        case SAVE_TEMP_PERSONAL_INFO:
            return [...state, action.payload]
        default:
            return state
    }
}

export default personalInfoReducer