import { postData, getData } from "../../helpers/apiCalls"
import { GET_ADDRESS_INFO,  SAVE_ADDRESS_INFO, SAVE_TEMP_ADDRESS_INFO } from '../actions/constants1'

const getAddressInfo = (id) => {
    return {
        type: GET_ADDRESS_INFO,
        id
    }
}

const saveAddressInfo = (addressInfoData) => {
    return {
        type: SAVE_ADDRESS_INFO,
        payload: addressInfoData
    }
}

export const saveTempAddressInfoAction = (addressInfoData) => {
    return {
        type: SAVE_TEMP_ADDRESS_INFO,
        payload: addressInfoData
    }
}

export const getAddressInfoAction = (id) => dispatch => {
    const response = getData({id})
    dispatch(getAddressInfo({...response, id}))
}

export const saveAddressInfoAction = (addressInfoData) => dispatch => {
    const response = postData(addressInfoData)
    dispatch(saveAddressInfo({...response, ...addressInfoData}))
}