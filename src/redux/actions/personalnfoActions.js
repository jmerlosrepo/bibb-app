import { postData, getData } from "../../helpers/apiCalls"
import { GET_PERSONAL_INFO, SAVE_PERSONAL_INFO, SAVE_TEMP_PERSONAL_INFO, UPDATE_PERSONAL_INFO, DELETE_PERSONAL_INFO } from "./constants";

export const getPersonalInfoActions = (id) => dispatch => {
    const response = getData({id})
    dispatch(getPersonalInfo(response))
}

export const savePersonalInfoActions = (personalInfo) => dispatch => {
    const response = postData(personalInfo)
    dispatch(savePersonalInfoActions({...personalInfo, ...response }))
}

export const updatePersonalInfoActions = (personalInfo) => dispatch => {
    const response = postData(personalInfo)
    dispatch(updatePersonalInfo({...personalInfo, ...response}))
}

export const deletePersonalInfoActions = (id) => dispatch => {
    const response = postData({id})
    dispatch(deletePersonalInfo({...response, id}))
}

const getPersonalInfo = (personalInfo) => {
    return {
        type: GET_PERSONAL_INFO,
        payload: personalInfo
    }
}

export const savePersonalInfo = (personalInfo) => {
    return {
        type: SAVE_PERSONAL_INFO,
        payload: personalInfo
    }
}

export const updatePersonalInfo = (personalInfo) => {
    return {
        type: UPDATE_PERSONAL_INFO,
        payload: personalInfo
    }
}

export const deletePersonalInfo = (id) => {
    return {
        type: DELETE_PERSONAL_INFO,
        id
    }
}