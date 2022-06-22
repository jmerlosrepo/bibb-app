import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const SubmitCancelProfileControls = () => {
    const handleProfileSubmit = () => {}

  return (
    <div>
        <ActionButton text="Save Profile" color="primary" disabled={false} onClick={handleProfileSubmit} />
    </div>
  )
}

export default SubmitCancelProfileControls