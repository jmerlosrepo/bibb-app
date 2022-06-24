import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { REGISTER_USER } from "./constants"

const registerNewUser = (userData) => {
    return {
        type: REGISTER_USER,
        userData
    }
}

export const registerNewUserAction = (userData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userRegister, 'POST', userData )
    dispatch(registerNewUser({...userData, ...apiResponse }))
}