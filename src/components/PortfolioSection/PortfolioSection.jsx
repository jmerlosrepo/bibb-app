import React from 'react'
import PortfolioForm from '../PortfolioForm/PortfolioForm'
import ActionButton from '../ActionButton/ActionButton'

const PortfolioSection = () => {

    const handlePortfolioOnAddSocialMedia = () => {}

  return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Project to Portfolio" color="success" onClick={handlePortfolioOnAddSocialMedia} />
        </div>
        <PortfolioForm />
    </div>
  )
}

export default PortfolioSection