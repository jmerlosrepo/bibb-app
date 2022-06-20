import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({ text, path }) => {
  return (
    <li className="nav-item">
        <Link className="nav-link" to={path}>{ text }</Link>
    </li>
  )
}

export default NavigationLink