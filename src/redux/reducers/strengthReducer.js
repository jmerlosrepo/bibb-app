import { ADD_STRENGTH, GET_STRENGTH, SAVE_STRENGTH, SAVE_TEMP_STRENGTH, DELETE_STRENGTH } from "../actions/constants"
import { strength } from '../../models/strengthsModel'

const initialStrengthState = [strength]

const strengthReducer = (state = initialStrengthState, action) => {
    switch (action.type) {
        case ADD_STRENGTH:
            return [...state, strength]
        case GET_STRENGTH:
            return action.payload
        case SAVE_STRENGTH:
            return [...state, action.payload]
        case SAVE_TEMP_STRENGTH:
            return [...state, action.payload]
        case DELETE_STRENGTH:
            return state.filter( stateItem => stateItem.strengthId !== action.id )
        default:
            return state
    }
}

export default strengthReducer