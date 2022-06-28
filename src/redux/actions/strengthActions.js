import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { ADD_STRENGTH, GET_STRENGTH, SAVE_STRENGTH, SAVE_TEMP_STRENGTH, DELETE_STRENGTH, EDIT_STRENGTH } from "../actions/constants"

const getStrength = (id) => {
    return {
        type: GET_STRENGTH,
        id
    }
}

const saveStrength = (strengthData) => {
    return {
        type: SAVE_STRENGTH,
        payload: strengthData
    }
}

const deleteStrength = (payload) => {
    return {
        type: DELETE_STRENGTH,
        payload
    }
}

const addStrength = (id) => {
    return {
        type: ADD_STRENGTH
    }
}

export const editSterngthAction = (id) => {
    return {
        type: EDIT_STRENGTH,
        id
    }
}

export const saveTempStrengthAction = (strengthData) => {
    return {
        type: SAVE_TEMP_STRENGTH,
        payload: strengthData
    }
}

export const addStrengthAction = (id) => dispatch => {
    //const [ apiResponse, apiCallFunction ] = useDataOperations()
    //apiCallFunction(endPoints.userSterngths, 'POST', {id} )
    dispatch(addStrength())
}

export const getStrengthAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userSterngths, 'GET', null, {id} )
    dispatch(getStrength({...apiResponse, id}))
}

export const saveStrengthAction = (strengthData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userSterngths, 'POST', strengthData )
    dispatch(saveStrength({...strengthData, ...apiResponse}))
}

export const deleteStrengthAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userSterngths, 'DELETE', null, {id} )
    dispatch(deleteStrength({id}))
}