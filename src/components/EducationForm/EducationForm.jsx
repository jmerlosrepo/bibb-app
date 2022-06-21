import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { education } from '../../models/educationModel'
import { saveEducationAction, deleteEducationAction } from '../../redux/actions/educationActions'

const EducationForm = ({data}) => {

    const [educationId, setEducationId] = useState(0)
    const [institution, setInstitution] = useState('')
    const [degree, setDegree] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isCurrentJob, setIsCurrentJob] = useState(false)
    const isEditMode = useRef(false)
    const dispatch = useDispatch()

    useEffect(() => {
        education.educationId = data.educationId
        education.institution = data.institution
        education.degree = data.degree
        education.startDate = data.startDate
        education.endDate = data.endDate
        education.current = data.current
        education.saved = true
    }, [data])

    const handleEducationOnSave = () => {
        education.educationId = educationId
        education.institution = institution
        education.degree = degree
        education.startDate = startDate
        education.endDate = endDate
        education.current = isCurrentJob
        education.saved = true
        dispatch(saveEducationAction(education))
    }
    const handleEducationOnCancel = () => {}
    const handleEducationOnEdit = () => {
        isEditMode.current = true
    }
    const handleEducationOnDelete = () => {
        dispatch(deleteEducationAction(education.educationId))
    }

  return (
    <div key={educationId} className="educationForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Institution Name</label>
                {!education.saved && isEditMode
                ? (
                    <input onChange={e => setInstitution(e.target.value)} type="text" className="form-control form-control-sm field" value={institution} />
                ) 
                : (<div>{institution}</div>)}
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Degree</label>
                {!education.saved && isEditMode
                ? (
                <select value={degree} onChange={e => setDegree(e.target.value)} className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                ) 
                : (
                    <div>{degree}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Start Date</label>
                {!education.saved && isEditMode
                ? (
                    <input value={startDate} onChange={e => setStartDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{startDate}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">End Date</label>
                {!education.saved && isEditMode
                ? (
                    <input value={endDate} onChange={e => setEndDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{endDate}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <div className="form-check">
                {!education.saved && isEditMode
                ? (
                    <>
                        <input checked={isCurrentJob} onChange={e => setIsCurrentJob(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Current
                        </label>
                    </>
                ) 
                : (
                    <div>{isCurrentJob && 'Current Job'}</div>
                )}
                </div>
            </div>
        </div>
        {!education.saved && isEditMode
        ? (
            <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                <ActionButton text="Cancel" color="danger" onClick={handleEducationOnSave} />
                <ActionButton text="Save" color="primary" onClick={handleEducationOnCancel} />
            </div>
        ) 
        : (
            <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                <ActionButton text="Edit" color="primary" onClick={handleEducationOnEdit} />
                <ActionButton text="Delete" color="danger" onClick={handleEducationOnDelete} />
            </div>

        )}
    </div>
  )
}

export default EducationForm