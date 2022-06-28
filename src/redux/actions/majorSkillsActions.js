import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
import { ADD_MAJOR_SKILLS_KNOWLEDGE, DELETE_MAJOR_SKILLS_KNOWLEDGE, GET_MAJOR_SKILLS, ADD_MAJOR_SKILLS, SAVE_MAJOR_SKILLS, SAVE_TEMP_MAJOR_SKILLS, DELETE_MAJOR_SKILLS, EDIT_MAJOR_SKILLS } from "./constants"


const getMajorSkills = (id) => {
    return {
        type: GET_MAJOR_SKILLS,
        id
    }
}

const addMajorSkills = () => {
    return {
        type: ADD_MAJOR_SKILLS
    }
}

const saveMajorSkills = (majorSkillData) => {
    return {
        type: SAVE_MAJOR_SKILLS,
        payload: majorSkillData
    }
}

const deleteMajorSkills = (id) => {
    return {
        type: DELETE_MAJOR_SKILLS,
        id
    }
}

export const addMajorSkillsKnowledgeAction = (majorSkillKNowledgeData) => {
    return {
        type: ADD_MAJOR_SKILLS_KNOWLEDGE,
        payload: majorSkillKNowledgeData
    }
}

export const deleteMajorSkillsKnowledgeAction = (majorSkillKNowledgeData) => {
    return {
        type: DELETE_MAJOR_SKILLS_KNOWLEDGE,
        payload: majorSkillKNowledgeData
    }
}

export const editMajorSkillsAction = (id) => {
    return {
        type: EDIT_MAJOR_SKILLS,
        id
    }
}

export const saveTempMajorSkillsAction = (majorSkillData) => {
    return {
        type: SAVE_TEMP_MAJOR_SKILLS,
        payload: majorSkillData
    }
}

export const addMajorSkillsAction = () => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userMajorSkills, 'POST', {id} )
    dispatch(addMajorSkills())
}

export const getMajorSkillsAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userMajorSkills, 'GET', null, {id} )
    dispatch(getMajorSkills(id))
}

export const saveMajorSkillsAction = (majorSkillData) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userMajorSkills, 'POST', majorSkillData )
    dispatch(saveMajorSkills(majorSkillData))
}

export const deleteMajorSkillsAction = (id) => dispatch => {
    // const [ apiResponse, apiCallFunction ] = useDataOperations()
    // apiCallFunction(endPoints.userMajorSkills, 'DELETE', {id} )
    dispatch(deleteMajorSkills(id))
}
