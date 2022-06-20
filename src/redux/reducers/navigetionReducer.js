import { INITIALIZE_NAVIGATION, SET_LOGGED_IN_NAVIGATION } from "../actions/constants"
import { navigationLinks } from '../../config/navigationConfig'

const initialState = navigationLinks

const nagivagtionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_NAVIGATION:
            return state = navigationLinks
        case SET_LOGGED_IN_NAVIGATION:
            return {state, ...action.loggedInMenuData}
        default:
            return state
    }
}

export default nagivagtionReducer