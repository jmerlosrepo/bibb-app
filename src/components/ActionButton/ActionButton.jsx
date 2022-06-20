import React from 'react'

const ActionButton = ({ text, color, disabled, onClick}) => {
  const colors = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    success: "btn-success",
    danger: "btn-danger",
    warning: "btn-warning",
    info: "btn-info",
    light: "btn-light",
    dark: "btn-dark"
  }

  return (
    <button disabled={disabled} onClick={onClick} type="button" className={`btn button-margin ${colors[color]}`}>{text}</button>
  )
}

export default ActionButton