import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { education } from '../../models/educationModel'
import { saveTempEducationAction, deleteEducationAction, editEducationAction } from '../../redux/actions/educationActions'

const EducationForm = ({data}) => {
    const { educationId, institution, degree, startDate, endDate, current, tempSaved } = data

    const [EduId, setEduId] = useState(educationId)
    const [EduInstitution, setEduInstitution] = useState(institution)
    const [EduDegree, setEduDegree] = useState(degree)
    const [eduStartDate, setEduStartDate] = useState(startDate)
    const [eduEndDate, setEduEndDate] = useState(endDate)
    const [eduCurrent, setEduCurrent] = useState(current)
    const [educationSaved, setEducationSaved] = useState(tempSaved)

    const dispatch = useDispatch()

    const handleEducationOnSave = () => {
        education.educationId = EduId
        education.institution = EduInstitution
        education.degree = EduDegree
        education.startDate = eduStartDate
        education.endDate = eduEndDate
        education.current = eduCurrent
        setEducationSaved(!educationSaved)
        dispatch(saveTempEducationAction(education))
    }
    const handleEducationOnCancel = () => {
        dispatch(deleteEducationAction(EduId))
    }

    const handleEducationOnEdit = () => {
        setEducationSaved(!educationSaved)
        dispatch(editEducationAction(EduId))
    }

    const handleEducationOnDelete = () => {
        dispatch(deleteEducationAction(EduId))
    }

  return (
    <div key={EduId} className="educationForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Institution Name</label>
                {!educationSaved
                ? (
                    <input onChange={e => setEduInstitution(e.target.value)} type="text" className="form-control form-control-sm field" value={EduInstitution} />
                ) 
                : (<div>{institution}</div>)}
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Degree</label>
                {!educationSaved
                ? (
                <select value={EduDegree} onChange={e => setEduDegree(e.target.value)} className="form-select form-select-sm" aria-label="Default select example">
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
                {!educationSaved
                ? (
                    <input value={eduStartDate} onChange={e => setEduStartDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{startDate}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">End Date</label>
                {!educationSaved
                ? (
                    <input value={eduEndDate} onChange={e => setEduEndDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{endDate}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <div className="form-check">
                {!educationSaved
                ? (
                    <>
                        <input value={eduCurrent} checked={eduCurrent} onChange={e => setEduCurrent(e.target.checked)} className="form-check-input" type="checkbox" id="flexCheckChecked"  />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Current
                        </label>
                    </>
                ) 
                : (
                    <div>{educationSaved && 'Current Job'}</div>
                )}
                </div>
            </div>
        </div>
        {!educationSaved
        ? (
            <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                <ActionButton text="Cancel" color="danger" onClick={handleEducationOnCancel} />
                <ActionButton text="Save" color="primary" onClick={handleEducationOnSave} />
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