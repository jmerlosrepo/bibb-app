import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExperienceForm from '../ExperienceForm/ExperienceForm'
import ActionButton from '../ActionButton/ActionButton'
import { addProfessionalInfoAction } from '../../redux/actions/professionalInfoActions'

const ExperienceSection = () => {

  const dispatch = useDispatch()
  const professionalInfo = useSelector(state => state.professionalInfoReducer)
  const [professionalInfoSaved, setProfessionalInfoSaves] = useState(professionalInfo.unsavedProfessionalInfo)

  useEffect(() => {
    setProfessionalInfoSaves(professionalInfo.unsavedProfessionalInfo)
  }, [professionalInfo])

  const handleExperienceOnAddExperience = () => {
    dispatch(addProfessionalInfoAction())
  }

  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton disabled={professionalInfoSaved} text="Add Experience" color="success" onClick={handleExperienceOnAddExperience} />
        </div>
        { professionalInfo && professionalInfo.professionalInfo.map( proInfoItem => (<ExperienceForm data={proInfoItem} />) ) }
        
    </div>
  )
}

export default ExperienceSection