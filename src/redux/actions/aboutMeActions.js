import { postData, getData } from "../../helpers/apiCalls"
import { GET_ABOUT_ME_INFO, SAVE_ABOUT_ME_INFO, SAVE_TEMP_ABOUT_ME_INFO, DELETE_ABOUT_ME_INFO, UPDATE_ABOUT_ME_INFO } from "./constants"

export const getAboutMeAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getAboutMe(response))
}

export const saveAboutMeAction = (aboutMeData) => dispatch => {
    const response = postData(aboutMeData)
    dispatch(saveAboutMe({...aboutMeData, ...response}))
}

export const updateAboutMeAction = (aboutMeData) => dispatch => {
    const response  = postData(aboutMeData)
    dispatch(updateAboutMe({...aboutMeData, ...response}))
}

export const deleteAboutMeAction = (id) => dispatch => {
    const response = postData(id)
    dispatch(deleteAboutMe({...response, id}))
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