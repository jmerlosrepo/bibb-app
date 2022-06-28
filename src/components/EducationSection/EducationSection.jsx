import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import EducationForm from '../EducationForm/EducationForm'
import { addEducationAction } from '../../redux/actions/educationActions'

const EducationSection = () => {

  const educations = useSelector(state => state.educationReducer)
  const [educationSaved, setEducationSaved] = useState(educations.unsavedEducations)
  const dispatch = useDispatch()

    useEffect(() => {
      setEducationSaved(educations.unsavedEducations)
    }, [educations])

    const handleEducationOnAddEducation = () => {
        dispatch(addEducationAction())
    }

  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton disabled={educationSaved} text="Add Education" color="success" onClick={handleEducationOnAddEducation} />
        </div>
        { educations && educations.educations.map( educationItem =>  <EducationForm data={educationItem} />) }
    </div>
  )
}

export default EducationSection