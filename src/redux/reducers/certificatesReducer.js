import { ADD_CERTIFICATES, GET_CERTIFICATES, SAVE_CERTIFICATES, SAVE_TEMP_CERTIFICATES, DELETE_CERTIFICATES } from "../actions/constants"
import { certificate } from "../../models/certificatesModel"
const initialCertificatesState = [certificate]

const certificatesReducer = (state = initialCertificatesState, action) => {
    switch (action.type) {
        case ADD_CERTIFICATES:
            return [...state, certificate]
        case GET_CERTIFICATES:
            return action.payload
        case SAVE_CERTIFICATES:
            return [...state, action.payload]
        case SAVE_TEMP_CERTIFICATES:
            return [...state, action.payload]
        case DELETE_CERTIFICATES:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default certificatesReducer