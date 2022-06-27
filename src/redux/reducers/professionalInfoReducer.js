import { GET_PROFESSIONAL_INFO, ADD_PROFESSIONAL_INFO, SAVE_PROFESSIONAL_INFO, SAVE_TEMP_PROFESSIONAL_INFO, DELETE_PROFESSIONAL_INFO, EDIT_PROFESSIONAL_INFO } from "../actions/constants"
import { professionalInfo } from "../../models/professionalInfoModel"

const initialProfessionaInforState = {
    unsavedProfessionalInfo: true,
    professionalInfo: [professionalInfo]
}

const professionalInfoReducer = (state = initialProfessionaInforState ,action) => {
    switch (action.type) {
        case ADD_PROFESSIONAL_INFO:
            professionalInfo.tempSaved = false
            return {...state, professionalInfo: [...state.professionalInfo, professionalInfo]}
        case GET_PROFESSIONAL_INFO:
            return action.payload
        case SAVE_PROFESSIONAL_INFO:
            const copyStateToSave = {...state}
            return copyStateToSave
        case SAVE_TEMP_PROFESSIONAL_INFO:
            const copyStateToTempSave = {...state}
            let professionalInfoToTempSave = copyStateToTempSave.professionalInfo.map( proInfoItem => proInfoItem.professionalInfoId === action.payload.professionalInfoId )
            //TODO add userData from action.data
            let indexToTempSave  = state.professionalInfo.indexOf(professionalInfoToTempSave)
            professionalInfoToTempSave.tempSaved = true
            copyStateToTempSave.unsavedProfessionalInfo = false
            copyStateToTempSave.professionalInfo[indexToTempSave] = {...professionalInfoToTempSave}
            return copyStateToTempSave
        case EDIT_PROFESSIONAL_INFO:
            const copyStateToEdit = {...state}
            let professionalInfoToEdit = copyStateToEdit.professionalInfo.map( proInfoItem => proInfoItem.professionalInfoId === action.id )
            let indexToEdit  = state.professionalInfo.indexOf(professionalInfoToEdit)
            professionalInfoToEdit.tempSaved = false
            copyStateToEdit.unsavedProfessionalInfo = true
            copyStateToEdit.professionalInfo[indexToEdit] = {...professionalInfoToEdit}
            return copyStateToEdit
        case DELETE_PROFESSIONAL_INFO:
            const copyStateToDelete = {...state}
            let professionalInfoToDelete = copyStateToDelete.professionalInfo.filter( proInfoItem => proInfoItem.professionalInfoId !== action.id )
            copyStateToDelete.professionalInfo = [...professionalInfoToDelete]
            return copyStateToDelete
        default:
            return state
    }
}

export default professionalInfoReducer