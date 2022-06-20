import { postData } from "../../helpers/apiCalls"
import { REGISTER_USER } from "./constants"

const registerNewUser = (userData) => {
    return {
        type: REGISTER_USER,
        userData
    }
}

export const registerNewUserAction = (userData) => dispatch => {
    const response = postData(userData)
    dispatch(registerNewUser({...userData, ...response }))
}