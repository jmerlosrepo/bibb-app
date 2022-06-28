import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { GET_PERSONAL_INFO, SAVE_PERSONAL_INFO, SAVE_TEMP_PERSONAL_INFO, UPDATE_PERSONAL_INFO, DELETE_PERSONAL_INFO } from "./constants";

export const getPersonalInfoActions = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userPersonalInfo, 'GET', null, {id} )
    dispatch(getPersonalInfo({...apiResponse, id}))
}

export const savePersonalInfoActions = (personalInfo) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userPersonalInfo, 'POST', personalInfo )
    dispatch(savePersonalInfoActions({...apiResponse, ...personalInfo }))
}

export const updatePersonalInfoActions = (personalInfo) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userPersonalInfo, 'PATCH', personalInfo )
    dispatch(updatePersonalInfo({...apiResponse, ...personalInfo}))
}

export const deletePersonalInfoActions = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userPersonalInfo, 'PATCH', null, {id} )
    dispatch(deletePersonalInfo({...apiResponse, id}))
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