import { REGISTER_USER } from "../actions/constants";
const initialUserState = {}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return state = action.userData
        default:
            return state
    }
}

export default userReducer