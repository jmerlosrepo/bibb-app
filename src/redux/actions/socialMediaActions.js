import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { GET_SOCIAL_MEDIA, ADD_SOCIAL_MEDIA, SAVE_SOCIAL_MEDIA, SAVE_TEMP_SOCIAL_MEDIA, DELETE_SOCIAL_MEDIA } from "./constants"

const addSocialMedia = (id) => {
    return {
        type: ADD_SOCIAL_MEDIA,
        id
    }
}

const getSocialMedia = (id) => {
    return {
        type: GET_SOCIAL_MEDIA,
        id
    }
}

const saveSocialMedia = (socialMediaData) => {
    return {
        type: SAVE_SOCIAL_MEDIA,
        payload: socialMediaData
    }
}

const deleteSocialMedia = (id) => {
    return {
        type: DELETE_SOCIAL_MEDIA,
        id
    }
}

export const saveTempSocialMediaAction = (socialMediaData) => {
    return {
        type: SAVE_TEMP_SOCIAL_MEDIA,
        payload: socialMediaData
    }
}

export const addSocialMediaAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userProfessionalInfo, 'POST', {id} )
    dispatch(addSocialMedia({...apiResponse, id}))
}

export const getSocialMediaAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userProfessionalInfo, 'GET', null, {id} )
    dispatch(getSocialMedia({...apiResponse, id}))
}

export const saveSocialMediaAction = (socialMediaData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userProfessionalInfo, 'POST', socialMediaData )
    dispatch(saveSocialMedia({...apiResponse, ...socialMediaData}))
}

export const deleteSocialMediaAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userProfessionalInfo, 'DELETE', null, {id} )
    dispatch(deleteSocialMedia({...apiResponse, id}))
}
