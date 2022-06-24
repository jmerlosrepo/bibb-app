import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
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
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userCertificates, 'POST', {id} )
    dispatch(addCertificates({...apiResponse, id}))
}

export const getCertificatesAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userCertificates, 'GET', null, {id} )
    dispatch(getCertificates({...apiResponse, id}))
}

export const saveCertificatesAction = (certificateData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userCertificates, 'POST', certificateData )
    dispatch(saveCertificates({...apiResponse, ...certificateData}))
}

export const deleteCertificatesAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userCertificates, 'DELETE', null, {id} )
    dispatch(deleteCertificates({...apiResponse, id}))
}
