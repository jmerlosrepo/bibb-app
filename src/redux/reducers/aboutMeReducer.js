import { GET_ABOUT_ME_INFO, SAVE_ABOUT_ME_INFO, SAVE_TEMP_ABOUT_ME_INFO, DELETE_ABOUT_ME_INFO } from "../actions/constants"
import { aboutMe } from "../../models/aboutMeModel"
const initialAboutMeState = [aboutMe]

const aboutMeReducer = (state = initialAboutMeState, action) => {
    switch (action.type) {
        case GET_ABOUT_ME_INFO:
            return action.payload
        case SAVE_ABOUT_ME_INFO:
            return [...state, action.payload]
        case SAVE_TEMP_ABOUT_ME_INFO:
            return [...state, action.payload]
        case DELETE_ABOUT_ME_INFO:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default aboutMeReducer