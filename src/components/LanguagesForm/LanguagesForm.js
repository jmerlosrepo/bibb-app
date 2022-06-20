import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const LanguagesForm = ({ onSave, onCancel }) => {
  let isBadge =false
  return (
    <div className="languagesForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Language</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            {
                !isBadge && (
                    <div className="col mb-3 formField">
                        <label className="form-label" htmlFor="">Percentage</label>
                        <input type="number" className="form-control form-control-sm field" />
                    </div>
                )
            }
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Cancel" color="danger" onClick={onCancel} />
          <ActionButton text="Save" color="primary" onClick={onSave} />
        </div>
    </div>
  )
}

export default LanguagesForm