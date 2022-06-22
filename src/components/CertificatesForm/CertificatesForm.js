import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const CertificatesForm = () => {
  const handleCertificatesOnSave = () => {}
  const handleCertificatesOnCancel = () => {}

  return (
    <div className="certificatesForm">
      <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
        <ActionButton text="Cancel" color="danger" onClick={handleCertificatesOnCancel} />
        <ActionButton text="Save" color="primary" onClick={handleCertificatesOnSave} />
      </div>
    </div>
  )
}

export default CertificatesForm