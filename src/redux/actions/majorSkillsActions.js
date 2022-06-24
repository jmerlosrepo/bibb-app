import { useDataOperations } from "../../hooks/useDataOperations"
import { endPoints } from "../../config/apiEndpoints"
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
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userMajorSkills, 'POST', {id} )
    dispatch(addMajorSkills({...apiResponse, id}))
}

export const getMajorSkillsAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userMajorSkills, 'GET', null, {id} )
    dispatch(getMajorSkills({...apiResponse, id}))
}

export const saveMajorSkillsAction = (majorSkillData) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userMajorSkills, 'POST', majorSkillData )
    dispatch(saveMajorSkills({...apiResponse, ...majorSkillData}))
}

export const deleteMajorSkillsAction = (id) => dispatch => {
    const [ apiResponse, apiCallFunction ] = useDataOperations()
    apiCallFunction(endPoints.userMajorSkills, 'DELETE', {id} )
    dispatch(deleteMajorSkills({...apiResponse, id}))
}
