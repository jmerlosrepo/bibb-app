import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const SocialMediaForm = ({ onSave, onCancel }) => {

  const handleSocialMediaOnSave = () => {}
  const handleSocialMediaOnCancel = () => {}

  return (
    <div className="SocialMediaForm">
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Cancel" color="danger" onClick={handleSocialMediaOnCancel} />
            <ActionButton text="Save" color="primary" onClick={handleSocialMediaOnSave} />
        </div>
    </div>
  )
}

export default SocialMediaForm