import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addStrengthAction } from '../../redux/actions/strengthActions'
import StrengthsForm from '../StrengthsForm/StrengthsForm'
import ActionButton from '../ActionButton/ActionButton'

const StrengthsSection = () => {
    const strengths = useSelector(state => state.strengthReducer)
    const [strengthSaved, setStrengthSaved] = useState(strengths.unsavedStrengths)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setStrengthSaved(strengths.unsavedStrengths)
    }, [strengths])


    const handleStrengthsOnAddStrength = () => {
        dispatch(addStrengthAction())
    }


  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton disabled={strengthSaved} text="Add Strength" color="success" onClick={handleStrengthsOnAddStrength} />
        </div>
        { strengths.strengths.map( 
                strength => (
                    <StrengthsForm data={strength}  />
                ) 
            ) 
        }
    </div>
  )
}

export default StrengthsSection