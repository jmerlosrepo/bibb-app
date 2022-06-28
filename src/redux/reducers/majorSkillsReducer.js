import {  ADD_MAJOR_SKILLS_KNOWLEDGE, DELETE_MAJOR_SKILLS_KNOWLEDGE, ADD_MAJOR_SKILLS, GET_MAJOR_SKILLS, SAVE_MAJOR_SKILLS, SAVE_TEMP_MAJOR_SKILLS, DELETE_MAJOR_SKILLS, EDIT_MAJOR_SKILLS } from '../actions/constants'
import { majorSkills } from '../../models/majorSkillsModel'
import { majorSkillKnowledge } from '../../models/majorSkillKnowledgeModel'

const initialMajorSkillsState = {
    unsavedMajorSkills: true,
    majorSkills: [majorSkills]
}

const majorSkillsReducer = (state = initialMajorSkillsState, action) => {
    switch (action.type) {
        case ADD_MAJOR_SKILLS:
            majorSkills.tempSaved = false
            return { ...state, majorSkills: [[...state.majorSkills, majorSkills]] }
        case GET_MAJOR_SKILLS:
            return action.payload
        case SAVE_MAJOR_SKILLS:
            const stateCopyToSave = {...state}
            return stateCopyToSave
        case SAVE_TEMP_MAJOR_SKILLS:
            const stateCopyToTempSave = {...state}
            let majorSkillToTempSave = stateCopyToTempSave.majorSkills.find( majorSkillItem => majorSkillItem.majorSkillId = action.payload.majorSkillId )
            let indexToSave = state.majorSkills.indexOf(majorSkillToTempSave)
            majorSkillToTempSave.tempSaved = true
            stateCopyToTempSave.unsavedMajorSkills = false
            stateCopyToTempSave.majorSkills[indexToSave] = {...majorSkillToTempSave}
            return stateCopyToTempSave
        case EDIT_MAJOR_SKILLS:
            const stateCopyToEdit = {...state}
            let majorSkillToEdit = stateCopyToEdit.majorSkills.find( majorSkillItem => majorSkillItem.majorSkillId === action.id )
            let indexToEdit = state.majorSkills.indexOf(majorSkillToEdit)
            //TODO add action.payload data
            majorSkillToEdit.tempSaved = false
            stateCopyToEdit.unsavedMajorSkills = true
            stateCopyToEdit.majorSkills[indexToEdit] = {...majorSkillToEdit}
            return stateCopyToEdit
        case DELETE_MAJOR_SKILLS:
            const stateCopyToDelete = {...state}
            let filteredMajorSkills = stateCopyToDelete.majorSkills.filter( majorSkillItem => majorSkillItem.majorSkillId !== action.id )
            stateCopyToDelete.majorSkills = [...filteredMajorSkills]
            return stateCopyToDelete
        case ADD_MAJOR_SKILLS_KNOWLEDGE:
            const stateCopyToAddKnowledge = {...state}
            let majorSkillToAddKnowledge = stateCopyToAddKnowledge.majorSkills.find( majorSkillItem => majorSkillItem.majorSkillId === action.payload.majorSkillId )
            let indexToAddKnowledge = state.majorSkills.indexOf(majorSkillToAddKnowledge)
            majorSkillToAddKnowledge.knowledge = [...majorSkillToAddKnowledge.knowledge, action.payload]
            stateCopyToAddKnowledge.majorSkills[indexToAddKnowledge] = {...majorSkillToAddKnowledge}
            return stateCopyToAddKnowledge
        case DELETE_MAJOR_SKILLS_KNOWLEDGE:
            const stateCopyToDeleteKnowledge = {...state}
            let majorSkillToDeleteKnowledge = stateCopyToDeleteKnowledge.majorSkills.find( majorSkillItem => majorSkillItem.majorSkillId === action.payload.majorSkillId )
            let indexToDeleteKnowledge = state.majorSkills.indexOf(majorSkillToDeleteKnowledge)
            let filteredKnowledge = majorSkillToDeleteKnowledge.knowledge.filter( knowledgeItem => knowledgeItem.id !== action.payload.id )
            majorSkillToDeleteKnowledge.knowledge = [...filteredKnowledge]
            stateCopyToDeleteKnowledge.majorSkills[indexToDeleteKnowledge] = {...majorSkillToDeleteKnowledge}
            return stateCopyToDeleteKnowledge
        default:
            return state
    }
}

export default majorSkillsReducer