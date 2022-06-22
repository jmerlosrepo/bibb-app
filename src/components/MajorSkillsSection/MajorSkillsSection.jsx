import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import MajorSkillForm from '../MajorSkillForm/MajorSkillForm'

const MajorSkillsSection = () => {

    const handleMajorSkillOnAddMajorSkill = () => {}
    
  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Major Skill" color="success" onClick={handleMajorSkillOnAddMajorSkill} />
        </div>
        <MajorSkillForm />
    </div>
  )
}

export default MajorSkillsSection