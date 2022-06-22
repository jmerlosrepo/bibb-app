
import { ADD_SOCIAL_MEDIA, GET_SOCIAL_MEDIA, SAVE_SOCIAL_MEDIA, SAVE_TEMP_SOCIAL_MEDIA, DELETE_SOCIAL_MEDIA } from '../actions/constants'
import { socialMedia } from '../../models/socialMediaModel'
const initialSocialMediaState = [socialMedia]

const socialMediaReducer = (state = initialSocialMediaState, action) => {
    switch (action.type) {
        case ADD_SOCIAL_MEDIA:
            return [...state, socialMedia]
        case GET_SOCIAL_MEDIA:
            return action.payload
        case SAVE_SOCIAL_MEDIA:
            return [...state, action.payload]
        case SAVE_TEMP_SOCIAL_MEDIA:
            return [...state, action.payload]
        case DELETE_SOCIAL_MEDIA:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default socialMediaReducer