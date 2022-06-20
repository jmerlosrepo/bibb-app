import { LOGIN_USER } from "../actions/constants"
const intialLoginState = {}

const logInUserReducer = (state= intialLoginState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return state = action.loginData
        default:
            return state;
    }
}

export default logInUserReducer

