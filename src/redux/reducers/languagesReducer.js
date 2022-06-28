import { ADD_LANGUAGES, GET_LANGUAGES, SAVE_LANGUAGES, SAVE_TEMP_LANGUAGES, DELETE_LANGUAGES } from '../actions/constants'
import { languages } from '../../models/languagesModel'
const initialLanguagesState = [languages]

const languagesReducer = (state = initialLanguagesState, action) => {
    switch (action.type) {
        case ADD_LANGUAGES:
            return [...state, languages]
        case GET_LANGUAGES:
            return action.payload
        case SAVE_LANGUAGES:
            return [...state, action.payload]
        case SAVE_TEMP_LANGUAGES:
            return [...state, action.payload]
        case DELETE_LANGUAGES:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default languagesReducer