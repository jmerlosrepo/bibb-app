import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const SubmitCancelProfileControls = () => {
    const handleProfileSubmit = () => {}

  return (
    <div className="button-spacing save-profile-button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
        <ActionButton text="Save Profile" color="primary" disabled={false} onClick={handleProfileSubmit} />
    </div>
  )
}

export default SubmitCancelProfileControls