import { INITIATE_USER_SESSION, TERMINATE_USER_SESSION } from "./constants"

export const initiateUserSessionAction = ( useSessionData ) => {
    return {
        type: INITIATE_USER_SESSION,
        payload: useSessionData
    }
}
export const terminateUserSessionAction = (id) => {
    return {
        type: TERMINATE_USER_SESSION,
        id
    }
}