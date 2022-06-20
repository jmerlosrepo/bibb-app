import React from 'react'

const FieldSet = ({ title, children }) => {
  return (
    <fieldset className="fieldset-section">
        <legend>{ title }</legend>
        <hr />
        { children }
    </fieldset>
  )
}

export default FieldSet