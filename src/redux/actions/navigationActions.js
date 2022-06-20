import { INITIALIZE_NAVIGATION, SET_LOGGED_IN_NAVIGATION } from "./constants";

export const initializeNavigation = (mainMenuData) => {
    return {
        type: INITIALIZE_NAVIGATION,
        payload: mainMenuData
    }
}

export const setLoggedInNavigation = (loggedInMenuData) => {
    return {
        type: SET_LOGGED_IN_NAVIGATION,
        payload: loggedInMenuData
    }
}