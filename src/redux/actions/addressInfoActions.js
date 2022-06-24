import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
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
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAddress, 'GET', null, {id} )
    dispatch(getAddressInfo({...apiResponse, id}))
}

export const saveAddressInfoAction = (addressInfoData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userAddress, 'POST', addressInfoData )
    dispatch(saveAddressInfo({...apiResponse, ...addressInfoData}))
}