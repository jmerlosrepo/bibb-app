import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import SocialMediaForm from '../SocialMediaForm/SocialMediaForm'

const SocialMediaSection = () => {
    
    const handleSocialMediaOnAddSocialMedia = () => {}
    
  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Social Media" color="success" onClick={handleSocialMediaOnAddSocialMedia} />
        </div>
        <SocialMediaForm />
    </div>
  )
}

export default SocialMediaSection