import { INITIATE_USER_SESSION, TERMINATE_USER_SESSION } from "../actions/constants"
import { userSession } from "../../models/userSessionModel"

const initialUserSessionState = userSession

const userSessionReducer = (state = initialUserSessionState, action) => {
    switch (action.type) {
        case INITIATE_USER_SESSION:
            return action.useSessionData
        case TERMINATE_USER_SESSION:
            return state
        default:
            return state
    }
}

export default userSessionReducer