import { GET_EDUCATION, ADD_EDUCATION, SAVE_EDUCATION, SAVE_TEMP_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION } from "../actions/constants"
import { education } from "../../models/educationModel"

const initialEducationState = {
    unsavedEducations: true,
    educations: [education]
}

const educationReducer = (state = initialEducationState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            education.tempSaved = false
            return {...state.educations, educations: [...state.educations, education]}
        case GET_EDUCATION:
            return action.payload
        case SAVE_EDUCATION:
            let stateCopyToSave = {...state}
            return stateCopyToSave
        case SAVE_TEMP_EDUCATION:
            console.log('SAVING EDUCATION')
            let stateCopyToTempSave = {...state}
            let educationToSaveTemp = stateCopyToTempSave.educations.find( educationItem => educationItem.educationId === action.payload.educationId )
            let indexToSaveTemp = state.educations.indexOf(educationToSaveTemp)
            //TODO ADD PAYLOAD DATA from action.payload
            educationToSaveTemp.tempSaved = true
            stateCopyToTempSave.unsavedEducations = false
            console.log('UNSAVED', stateCopyToTempSave)
            stateCopyToTempSave.educations[indexToSaveTemp] = {...educationToSaveTemp}
            console.log('STATE', stateCopyToTempSave)
            return stateCopyToTempSave
        case EDIT_EDUCATION:
            console.log('EDITING')
            let stateCopyToEdit = {...state}
            let educationToEdit = stateCopyToEdit.educations.find( educationItem => educationItem.educationId === action.id )
            let indexToEdit = state.educations.indexOf(educationToEdit)
            educationToEdit.tempSaved = false
            stateCopyToEdit.unsavedEducations = true
            stateCopyToEdit.educations[indexToEdit] = {...educationToEdit}
            return stateCopyToEdit
        case DELETE_EDUCATION:
            let stateCopyToDelete = {...state}
            let filteredEducations = stateCopyToDelete.educations.filter( stateItem => stateItem.educationId !== action.id )
            stateCopyToDelete.educations = [...filteredEducations]
            return stateCopyToDelete
        default:
            return state
    }
}

export default educationReducer