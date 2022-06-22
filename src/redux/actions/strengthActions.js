import { postData, getData } from '../../helpers/apiCalls'
import { ADD_STRENGTH, GET_STRENGTH, SAVE_STRENGTH, SAVE_TEMP_STRENGTH, DELETE_STRENGTH } from "../actions/constants"

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

const deleteStrength = (id) => {
    return {
        type: DELETE_STRENGTH,
        id
    }
}

const addStrength = (id) => {
    return {
        type: ADD_STRENGTH
    }
}

export const saveTempStrength = (strengthData) => {
    return {
        type: SAVE_TEMP_STRENGTH,
        payload: strengthData
    }
}

export const addStrengthAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(addStrength({...response, id}))
}

export const getStrengthAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getStrength({...response, id}))
}

export const saveStrengthAction = (strengthData) => dispatch => {
    const response = postData(strengthData)
    dispatch(saveStrength({...strengthData, ...response}))
}

export const deleteStrengthAction = (id) => dispatch => {
    const response = postData({id})
    dispatch(deleteStrength({...response, id}))
}