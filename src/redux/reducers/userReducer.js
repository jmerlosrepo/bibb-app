import { REGISTER_USER } from "../actions/constants";
import { registerUserModel } from "../../models/registerUserModel";
const initialUserState = registerUserModel

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return state = action.userData
        default:
            return state
    }
}

export default userReducer