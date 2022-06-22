import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import EducationForm from '../EducationForm/EducationForm'
import { addEducationAction } from '../../redux/actions/educationActions'

const EducationSection = () => {

    const dispatch = useDispatch()
    const education = useSelector(state => state.educationReducer)

    const handleEducationOnAddEducation = () => {
        dispatch(addEducationAction())
    }
  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Education" color="success" onClick={handleEducationOnAddEducation} />
        </div>
        { education && education.map( educationItem =>  <EducationForm data={educationItem} />) }
    </div>
  )
}

export default EducationSection