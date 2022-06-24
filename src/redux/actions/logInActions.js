import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { LOGIN_USER } from "./constants";

const logInUser = (loginData) => {
    return {
        type: LOGIN_USER,
        loginData
    }
}

export const logInUserAction = (loginData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userLogIn, 'POST', loginData )
    dispatch(logInUser({...loginData, ...apiResponse}))
}