import React from 'react'
import ExperienceForm from '../ExperienceForm/ExperienceForm'
import ActionButton from '../ActionButton/ActionButton'

const ExperienceSection = () => {
    const handleExperienceOnAddExperience = () => {}
  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Experience" color="success" onClick={handleExperienceOnAddExperience} />
        </div>
        <ExperienceForm />
    </div>
  )
}

export default ExperienceSection