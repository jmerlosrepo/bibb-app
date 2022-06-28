import { GET_ADDRESS_INFO,  SAVE_ADDRESS_INFO, SAVE_TEMP_ADDRESS_INFO } from '../actions/constants'
import { addressInfo } from '../../models/addressInfoModel'
const initialAddressInfoState = [addressInfo]


const addressInfoReducer = (state = initialAddressInfoState, action) => {
    switch (action.type) {

        case GET_ADDRESS_INFO:
            return action.payload
        case SAVE_ADDRESS_INFO:
            return [...state, action.payload]
        case SAVE_TEMP_ADDRESS_INFO:
            return [...state, action.payload]
        default:
            return state
    }
}

export default addressInfoReducer