import { postData } from "../../helpers/apiCalls"
import { LOGIN_USER } from "./constants";

const logInUser = (loginData) => {
    return {
        type: LOGIN_USER,
        loginData
    }
}

export const logInUserAction = (loginData) => dispatch => {
    const response = postData(loginData)
    dispatch(logInUser({...loginData, ...response}))
}