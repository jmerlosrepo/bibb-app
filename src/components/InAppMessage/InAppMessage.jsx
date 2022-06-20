import React from 'react'

const InAppMessage = ({message, color}) => {

  const colors = {
    primary: "alert-primary",
    secondary: "alert-secondary",
    success: "alert-success",
    danger: "alert-danger",
    warning: "alert-warning",
    info: "alert-info",
    light: "alert-light",
    dark: "alert-dark"
  }

  return (
    <div className={`alert ${colors[color]}`} role="alert">
      {message}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default InAppMessage