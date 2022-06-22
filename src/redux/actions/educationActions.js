import { postData, getData } from "../../helpers/apiCalls"
import { GET_EDUCATION, ADD_EDUCATION, SAVE_TEMP_EDUCATION, SAVE_EDUCATION, DELETE_EDUCATION } from "./constants"

const getEducation = (educationResponseData) => {
    return {
        type: GET_EDUCATION,
        payload: educationResponseData
    }
}

const addEducation = (educationData) => {
    return {
        type: ADD_EDUCATION,
        payload: educationData
    }
}

const saveEducation = (educationData) => {
    return {
        type: SAVE_EDUCATION,
        payload: educationData
    }
}

const deleteEducation = (id) => {
    return {
        type: DELETE_EDUCATION,
        id
    }
}

export const addEducationAction = (educationData) => dispatch => {
    const response = postData(educationData)
    dispatch(addEducation({...educationData, ...response}))
}

export const saveTempEducation = (educationData) => {
    return {
        type: SAVE_TEMP_EDUCATION,
        payload: educationData
    }
}

export const getEducationAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getEducation({...response, id}))
}

export const saveEducationAction = (educationData) => dispatch => {
    const response = postData(educationData)
    dispatch(saveEducation({...educationData, ...response}))
}

export const deleteEducationAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(deleteEducation({...response, id}))
}