import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'

const ExperienceForm = ({ data }) => {
    

    const handleExperienceOnSave = () => {}
    const handleExperienceOnCancel = () => {}
    const handleExperienceOnEdit = () => {}
    const handleExperienceOnDelete = () => {}

  return (
    <div className="experienceForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Organization Name</label>
                <input onChange={e => e.target.value} type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Job Title</label>
                <input onChange={e => {} } type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
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
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Activities</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        { false  
        ? (
            <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                <ActionButton text="Cancel" color="danger" onClick={handleExperienceOnCancel} />
                <ActionButton text="Save" color="primary" onClick={handleExperienceOnSave} />
            </div>
        ) 
        : (
            <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                <ActionButton text="Edit" color="primary" onClick={handleExperienceOnEdit} />
                <ActionButton text="Delete" color="danger" onClick={handleExperienceOnDelete} />
            </div>
        ) }
        
    </div>
  )
}

export default ExperienceForm