import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { GET_EDUCATION, ADD_EDUCATION, SAVE_TEMP_EDUCATION, SAVE_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION } from "./constants"

const getEducation = (educationResponseData) => {
    return {
        type: GET_EDUCATION,
        payload: educationResponseData
    }
}

const addEducation = () => {
    return {
        type: ADD_EDUCATION,
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

export const editEducationAction = (id) => {
    return {
        type: EDIT_EDUCATION,
        id
    }
}

export const addEducationAction = () => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userEducation, 'POST', {id} )
    dispatch(addEducation())
}

export const saveTempEducationAction = (educationData) => {
    return {
        type: SAVE_TEMP_EDUCATION,
        payload: educationData
    }
}

export const getEducationAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userEducation, 'GET', null, {id} )
    dispatch(getEducation(id))
}

export const saveEducationAction = (educationData) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userEducation, 'POST', educationData )
    dispatch(saveEducation(educationData))
}

export const deleteEducationAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userEducation, 'DELETE', null, {id} )
    dispatch(deleteEducation(id))
}