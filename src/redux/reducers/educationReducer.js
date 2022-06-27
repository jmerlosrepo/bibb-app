import { GET_EDUCATION, ADD_EDUCATION, SAVE_EDUCATION, SAVE_TEMP_EDUCATION, DELETE_EDUCATION } from "../actions/constants"
import { education } from "../../models/educationModel"

const initialEducationState = [education]

const educationReducer = (state = initialEducationState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            return [...state, education]
        case GET_EDUCATION:
            return action.payload
        case SAVE_EDUCATION:
            return [...state, action.payload]
        case SAVE_TEMP_EDUCATION:
            return [...state, action.payload]
        case DELETE_EDUCATION:
            return state.filter( stateItem => stateItem.educationId !== action.id )
        default:
            return state
    }
}

export default educationReducer