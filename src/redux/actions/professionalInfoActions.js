import { postData, getData } from "../../helpers/apiCalls"
import { SAVE_PROFESSIONAL_INFO, SAVE_TEMP_PROFESSIONAL_INFO, GET_PROFESSIONAL_INFO, ADD_PROFESSIONAL_INFO, DELETE_PROFESSIONAL_INFO} from "./constants"

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

export const saveTempProfessionalInfoAction = (professionalData) => {
    return {
        type: SAVE_TEMP_PROFESSIONAL_INFO,
        payload: professionalData
    }
}

export const addProfessionalInfoAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(addProfessionalInfo({...response, id}))
}

export const saveProfessionalInfoAction = (professionalData) => dispatch => {
    const response = postData({professionalData})
    dispatch(saveProfessionalInfo({...response, ...professionalData}))
}

export const getProfessionalInfoAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getProfessionalInfo({...response, id}))
}

export const deleteProfessionalInfoAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(deleteProfessionalInfo({...response, id}))
}