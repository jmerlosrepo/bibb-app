import { ADD_STRENGTH, GET_STRENGTH, SAVE_STRENGTH, SAVE_TEMP_STRENGTH, DELETE_STRENGTH, EDIT_STRENGTH } from "../actions/constants"
import { strength } from '../../models/strengthsModel'

const initialStrengthState = {
    unsavedStrengths: true,
    strengths: [strength]
}

const strengthReducer = (state = initialStrengthState, action) => {
    switch (action.type) {
        case ADD_STRENGTH:
            strength.tempSaved = false
            return { ...state, strengths: [...state.strengths, strength] }
        case GET_STRENGTH:
            return action.payload
        case SAVE_STRENGTH:
             let stateCopyToSave = {...state}
            return stateCopyToSave
        case SAVE_TEMP_STRENGTH:
            let stateCopyToTempSave = {...state}
            let strengthToSaveTemp = stateCopyToTempSave.strengths.find( stateItem => stateItem.strengthId === action.payload.strengthId )
             let indexToSaveTemp = state.strengths.indexOf(strengthToSaveTemp)
             //TODO ADD PAYLOAD DATA from action.payload
             strengthToSaveTemp.tempSaved = true
             stateCopyToTempSave.strengths[indexToSaveTemp] = {...strengthToSaveTemp}
             stateCopyToTempSave.unsavedStrengths = false
            return stateCopyToTempSave
        case DELETE_STRENGTH:
            let stateCopyToDelete= {...state}
            const filteredStrengths = stateCopyToDelete.strengths.filter( stateItem => stateItem.strengthId !== action.payload.id )
            stateCopyToDelete.strengths = [...filteredStrengths]
            return stateCopyToDelete
        case EDIT_STRENGTH:
            let stateCopyToEdit= {...state}
            let strengthToEdit = stateCopyToEdit.strengths.find( stateItem => stateItem.strengthId === action.id )
             let indexToEdit = state.strengths.indexOf(strengthToEdit)
             strengthToEdit.tempSaved = false
             stateCopyToEdit.strengths[indexToEdit] = {...strengthToEdit}
             stateCopyToEdit.unsavedStrengths = true
            return stateCopyToEdit
        default:
            return state
    }
}

export default strengthReducer