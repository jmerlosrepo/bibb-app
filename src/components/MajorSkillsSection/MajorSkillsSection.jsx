import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import MajorSkillForm from '../MajorSkillForm/MajorSkillForm'
import { addMajorSkillsAction } from '../../redux/actions/majorSkillsActions'

const MajorSkillsSection = () => {
  const majorSkills = useSelector(state => state.majorSkillsReducer)
  const [majorSkillsSaved, setMajorSkillsSaved] = useState(majorSkills.unsavedMajorSkills)
  const dispatch = useDispatch()

  useEffect(() => {
    setMajorSkillsSaved(majorSkills.unsavedMajorSkills)
  }, [majorSkills])

  const handleMajorSkillOnAddMajorSkill = () => {
    dispatch(addMajorSkillsAction())
  }
    
  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton disabled={majorSkillsSaved} text="Add Major Skill" color="success" onClick={handleMajorSkillOnAddMajorSkill} />
        </div>
        {majorSkills && majorSkills.majorSkills.map( majorSkillItem => <MajorSkillForm data={majorSkillItem} /> )}
        
    </div>
  )
}

export default MajorSkillsSection