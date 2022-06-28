import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { professionalInfo } from '../../models/professionalInfoModel'
import { saveTempProfessionalInfoAction, deleteProfessionalInfoAction, editProfessionalInfoAction } from '../../redux/actions/professionalInfoActions'

const ExperienceForm = ({ data }) => {
    
    const { educationId, organization, jobTitle, startDate, endDate, current, activities, tempSaved } = data

    const [ proInfoId, setProInfoId ] = useState(educationId)
    const [ proOrganization, setProOrganization ] = useState(organization)
    const [ proJobTitle, setProJobTitle ] = useState(jobTitle)
    const [ proStartDate, setProStartDate ] = useState(startDate)
    const [ proEndDate, setProEndDate ] = useState(endDate)
    const [ proCurrent, setProCurrent ] = useState(current)
    const [ proActivities, setProActivities ] = useState(activities)
    const [ professionalInfoSaved, setProfessionalInforSaved ] = useState(tempSaved)

    const dispatch = useDispatch()

    const handleExperienceOnSave = () => {
        setProfessionalInforSaved(!professionalInfoSaved)
        dispatch(saveTempProfessionalInfoAction(professionalInfo))
    }

    const handleExperienceOnEdit = () => {
        setProfessionalInforSaved(!professionalInfoSaved)
        dispatch(editProfessionalInfoAction(proInfoId))
    }

    const handleExperienceOnCancel = () => {
        dispatch(deleteProfessionalInfoAction(proInfoId))
    }
    
    const handleExperienceOnDelete = () => {
        dispatch(deleteProfessionalInfoAction(proInfoId))
    }

  return (
    <div key={proInfoId} className="experienceForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Organization Name</label>
                { !professionalInfoSaved 
                ? (
                    <input value={proOrganization}  onChange={e => setProOrganization(e.target.value)} type="text" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{proOrganization}</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Job Title</label>
                { !professionalInfoSaved 
                ? (
                    <input value={proJobTitle} onChange={e => setProJobTitle(e.target.value) } type="text" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{ proJobTitle }</div>
                ) }
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Start Date</label>
                {!professionalInfoSaved 
                ? (
                    <input value={proStartDate} onChange={e => setProStartDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{ proStartDate }</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">End Date</label>
                {!professionalInfoSaved 
                ? (
                    <input value={proEndDate} onChange={e => setProEndDate(e.target.value)} type="date" className="form-control form-control-sm field" />
                ) 
                : (
                    <div>{ proEndDate }</div>
                )}
            </div>
            <div className="col mb-3 formField">
                <div className="form-check">
                    {!professionalInfoSaved 
                    ? (
                        <>
                            <input  value={proCurrent} onChange={e => setProCurrent(e.target.value)} className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Current
                            </label>
                        </>
                    ) 
                    : (
                        <div>{'Current Educational Institution'}</div>
                    )}
                </div>
            </div>
        </div>
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Activities</label>
            {!professionalInfoSaved 
            ? (
                <textarea value={proActivities} onChange={e => setProActivities(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            )
            : (
                <div>{ proActivities }</div>
            )
            }
        </div>
        { !professionalInfoSaved
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