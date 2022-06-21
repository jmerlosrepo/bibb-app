import { postData, getData } from "../../helpers/apiCalls"
import { GET_EDUCATION, ADD_EDUCATION, SAVE_EDUCATION, DELETE_EDUCATION } from "./constants"

const getEducation = (educationResponseData) => {
    return {
        type: GET_EDUCATION,
        payload: educationResponseData
    }
}

export const addEducationAction = () => {
    return {
        type: ADD_EDUCATION
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