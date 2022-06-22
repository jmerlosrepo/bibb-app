import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import LanguagesForm from '../LanguagesForm/LanguagesForm'

const LanguagesSection = () => {
    const handleLanguagesOnAddLanguage = () => {}
    
  return (
    <div>
        <div className="form-check">
            <input onChange={() => {}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Show Languages as Badges
            </label>
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Language" color="success" onClick={handleLanguagesOnAddLanguage} />
        </div>
        <LanguagesForm />
    </div>
  )
}

export default LanguagesSection