import {  ADD_MAJOR_SKILLS, GET_MAJOR_SKILLS, SAVE_MAJOR_SKILLS, SAVE_TEMP_MAJOR_SKILLS, DELETE_MAJOR_SKILLS } from '../actions/constants'
import { majorSkills } from '../../models/majorSkillsModel'

const initialMajorSkillsState = [majorSkills]

const majorSkillsReducer = (state = initialMajorSkillsState, action) => {
    switch (action.type) {
        case ADD_MAJOR_SKILLS:
            return [...state, majorSkills]
        case GET_MAJOR_SKILLS:
            return action.payload
        case SAVE_MAJOR_SKILLS:
            return [...state, action.payload]
        case SAVE_TEMP_MAJOR_SKILLS:
            return [...state, action.payload]
        case DELETE_MAJOR_SKILLS:
            return state.filter( stateItem => stateItem.id !== action.id )
        default:
            return state
    }
}

export default majorSkillsReducer