import { postData, getData } from "../../helpers/apiCalls"
import { GET_CERTIFICATES, ADD_CERTIFICATES, SAVE_CERTIFICATES, SAVE_TEMP_CERTIFICATES, DELETE_CERTIFICATES } from "./constants"

const getCertificates = (id) => {
    return {
        type: GET_CERTIFICATES,
        id
    }
}

const addCertificates = (id) => {
    return {
        type: ADD_CERTIFICATES,
        id
    }
}

const saveCertificates = (certificateData) => {
    return {
        type: SAVE_CERTIFICATES,
        payload: certificateData
    }
}

const deleteCertificates = (id) => {
    return {
        type: DELETE_CERTIFICATES,
        id
    }
}

export const saveTempCertificatesAction = (certificateData) => {
    return {
        type: SAVE_TEMP_CERTIFICATES,
        payload: certificateData
    }
}

export const addCertificatesAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(addCertificates({...response, id}))
}

export const getCertificatesAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getCertificates({...response, id}))
}

export const saveCertificatesAction = (certificateData) => dispatch => {
    const response = postData(certificateData)
    dispatch(saveCertificates({...response, ...certificateData}))
}

export const deleteCertificatesAction = (id) => dispatch => {
    const response = postData(id)
    dispatch(deleteCertificates({...response, id}))
}
