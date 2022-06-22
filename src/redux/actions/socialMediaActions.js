import { postData, getData } from "../../helpers/apiCalls"
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
    const response = postData({id})
    dispatch(addSocialMedia({...response, id}))
}

export const getSocialMediaAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getSocialMedia({...response, id}))
}

export const saveSocialMediaAction = (socialMediaData) => dispatch => {
    const response = postData(socialMediaData)
    dispatch(saveSocialMedia({...response, ...socialMediaData}))
}

export const deleteSocialMediaAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(deleteSocialMedia({...response, id}))
}
