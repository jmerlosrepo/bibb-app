import { ADD_STRENGTH, GET_STRENGTH, SAVE_STRENGTH, DELETE_STRENGTH } from "../actions/constants"
import { strength } from '../../models/strengthsModel'

const initialStatus = [strength]

const strengthReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case ADD_STRENGTH:
            return [...state, strength]
        case GET_STRENGTH:
            return action.payload
        case SAVE_STRENGTH:
            return [...state, action.payload]
        case DELETE_STRENGTH:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default strengthReducer