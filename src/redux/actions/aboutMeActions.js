import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { GET_ABOUT_ME_INFO, SAVE_ABOUT_ME_INFO, SAVE_TEMP_ABOUT_ME_INFO, DELETE_ABOUT_ME_INFO, UPDATE_ABOUT_ME_INFO } from "./constants"


export const getAboutMeAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAboutMe, 'GET', null, {id} )
    dispatch(getAboutMe(apiResponse))
}

export const saveAboutMeAction = (aboutMeData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAboutMe, 'POST', aboutMeData)
    dispatch(saveAboutMe({...aboutMeData, ...apiResponse}))
}

export const updateAboutMeAction = (aboutMeData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAboutMe, 'PATCH', aboutMeData)
    dispatch(updateAboutMe({...aboutMeData, ...apiResponse}))
}

export const deleteAboutMeAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAboutMe, 'DELETE', null, {id})
    dispatch(deleteAboutMe({...apiResponse, id}))
}

export const saveTempAboutMeAction = (aboutMeData) => {
    return {
        type: SAVE_TEMP_ABOUT_ME_INFO,
        payload: aboutMeData
    }
}

const getAboutMe = (id) => {
    return{
        type: GET_ABOUT_ME_INFO,
        id
    }
}

const saveAboutMe = (aboutMeData) => {
    return {
        type: SAVE_ABOUT_ME_INFO,
        payload: aboutMeData
    }
}

const updateAboutMe = (aboutMeData) => {
    return {
        type: UPDATE_ABOUT_ME_INFO,
        payload: aboutMeData
    }
}

const deleteAboutMe = (id) => {
    return {
        type: DELETE_ABOUT_ME_INFO,
        id
    }
}