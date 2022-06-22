import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const MajorSkillForm = () => {
  const handleMajorSkillOnSave = () => {}
  const handleMajorSkillOnCancel = () => {}
  return (
    <div className="majorSkillForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Major Skill Title</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
            <label className="form-label" htmlFor="">Knowledge for this Skill</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Cancel" color="danger" onClick={handleMajorSkillOnCancel} />
          <ActionButton text="Save" color="primary" onClick={handleMajorSkillOnSave} />
        </div>
    </div>
  )
}

export default MajorSkillForm