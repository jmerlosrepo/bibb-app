import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { SAVE_PROFESSIONAL_INFO, SAVE_TEMP_PROFESSIONAL_INFO, GET_PROFESSIONAL_INFO, ADD_PROFESSIONAL_INFO, DELETE_PROFESSIONAL_INFO, EDIT_PROFESSIONAL_INFO} from "./constants"

const addProfessionalInfo = (id) => {
    return {
        type: ADD_PROFESSIONAL_INFO,
        id
    }
}
const saveProfessionalInfo = (professionalData) => {
    return {
        type: SAVE_PROFESSIONAL_INFO,
        payload: professionalData
    }
}
const getProfessionalInfo = (id) => {
    return {
        type: GET_PROFESSIONAL_INFO,
        id
    }
}
const deleteProfessionalInfo = (id) => {
    return {
        type: DELETE_PROFESSIONAL_INFO,
        id
    }
}

export const editProfessionalInfoAction = (id) => {
    return {
        type: EDIT_PROFESSIONAL_INFO,
        id
    }
}

export const saveTempProfessionalInfoAction = (professionalData) => {
    return {
        type: SAVE_TEMP_PROFESSIONAL_INFO,
        payload: professionalData
    }
}

export const addProfessionalInfoAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userProfessionalInfo, 'POST', {id} )
    dispatch(addProfessionalInfo(id))
}

export const saveProfessionalInfoAction = (professionalData) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userProfessionalInfo, 'POST', professionalData )
    dispatch(saveProfessionalInfo(professionalData))
}

export const getProfessionalInfoAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userProfessionalInfo, 'GET', null, {id} )
    dispatch(getProfessionalInfo(id))
}

export const deleteProfessionalInfoAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userProfessionalInfo, 'DELETE', null, {id} )
    dispatch(deleteProfessionalInfo(id))
}