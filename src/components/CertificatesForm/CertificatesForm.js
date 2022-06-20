import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const CertificatesForm = ({ onSave, onCancel }) => {
  return (
    <div className="certificatesForm">
      <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
        <ActionButton text="Cancel" color="danger" onClick={onCancel} />
        <ActionButton text="Save" color="primary" onClick={onSave} />
      </div>
    </div>
  )
}

export default CertificatesForm