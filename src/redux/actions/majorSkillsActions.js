import { postData, getData } from "../../helpers/apiCalls"
import { GET_MAJOR_SKILLS, ADD_MAJOR_SKILLS, SAVE_MAJOR_SKILLS, SAVE_TEMP_MAJOR_SKILLS, DELETE_MAJOR_SKILLS } from "./constants"

const getMajorSkills = (id) => {
    return {
        type: GET_MAJOR_SKILLS,
        id
    }
}

const addMajorSkills = (id) => {
    return {
        type: ADD_MAJOR_SKILLS,
        id
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

export const saveTempMajorSkillsAction = (majorSkillData) => {
    return {
        type: SAVE_TEMP_MAJOR_SKILLS,
        payload: majorSkillData
    }
}

export const addMajorSkillsAction = (id) => dispatch => {
    const response = postData()
    dispatch(addMajorSkills({...response, id}))
}

export const getMajorSkillsAction = (id) => dispatch => {
    const response = getData()
    dispatch(getMajorSkills({...response, id}))
}

export const saveMajorSkillsAction = (majorSkillData) => dispatch => {
    const response = postData()
    dispatch(saveMajorSkills({...response, ...majorSkillData}))
}

export const deleteMajorSkillsAction = (id) => dispatch => {
    const response = postData()
    dispatch(deleteMajorSkills({...response, id}))
}
