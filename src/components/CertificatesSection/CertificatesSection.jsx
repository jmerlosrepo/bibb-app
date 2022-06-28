import React from 'react'
import CertificatesForm from '../CertificatesForm/CertificatesForm'
import ActionButton from '../ActionButton/ActionButton'

const CertificatesSection = () => {

    const handleCertificatesOnAddCertificate = () => {}
  
    return (
    <div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Add Certificate" color="success" onClick={handleCertificatesOnAddCertificate} />
        </div>
        <CertificatesForm  />
    </div>
  )
}

export default CertificatesSection