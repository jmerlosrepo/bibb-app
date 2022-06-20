import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const EducationForm = ({onSave, onCancel}) => {
  return (
    <div className="educationForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Institution Name</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Degree</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Start Date</label>
                <input type="date" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">End Date</label>
                <input type="date" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <div className="form-check">
                    <input onChange={() => {}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Current
                    </label>
                </div>
            </div>
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Cancel" color="danger" onClick={onCancel} />
          <ActionButton text="Save" color="primary" onClick={onSave} />
        </div>
    </div>
  )
}

export default EducationForm