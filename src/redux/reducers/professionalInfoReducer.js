import { GET_PROFESSIONAL_INFO, ADD_PROFESSIONAL_INFO, SAVE_PROFESSIONAL_INFO, SAVE_TEMP_PROFESSIONAL_INFO, DELETE_PROFESSIONAL_INFO } from "../actions/constants"
import { professionalInfo } from "../../models/professionalInfoModel"

const initialProfessionaInforState = [professionalInfo]

const professionalInfoReducer = (state = initialProfessionaInforState ,action) => {
    switch (action.type) {
        case ADD_PROFESSIONAL_INFO:
            return [...state, professionalInfo]
        case GET_PROFESSIONAL_INFO:
            return action.payload
        case SAVE_PROFESSIONAL_INFO:
            return [...state, action.payload]
        case SAVE_TEMP_PROFESSIONAL_INFO:
            return [...state, action.payload]
        case DELETE_PROFESSIONAL_INFO:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default professionalInfoReducer