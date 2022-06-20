import React, { useRef, useEffect, useState } from 'react'
import InAppMessage from '../InAppMessage/InAppMessage'
import ActionButton from '../ActionButton/ActionButton'
import { userLoginStatus } from '../../models/userLoginModel'

const Login = ({ submitLogin, logInResponse }) => {

  const [showMessage, setShowMessage] = useState(false)
  const userEmail = useRef('')
  const password = useRef('')
  const messageToShow = useRef('');

  const Messages = {
    missignEmail: `Email or username incorrect not received`,
    missignPassword: `Password incorrect or not received`,
    invalidLogin: `Invalid login`
  }

  useEffect(() => {
    if(typeof logInResponse === 'undefined') {
      setShowMessage(false)
      return
    }

    if(logInResponse.status === 'invalid') {
      setShowMessage(true)
      messageToShow.current = 'invalidLogin'
    }

    if(logInResponse.status === 'missingEmail') {
      setShowMessage(true)
      messageToShow.current = 'missignEmail'
    }

    if(logInResponse.status === 'missignPassword') {
      setShowMessage(true)
      messageToShow.current = 'missignPassword'
    }
  },[logInResponse])

  return (
    <form className='login'>
      {showMessage && <InAppMessage message={Messages[messageToShow.current.toString()]} color="danger" />}

      <div className="formField">
          <label htmlFor="">Email</label>
          <input onChange={e => userEmail.current = e.target.value} type="text" className="form-control form-control-sm field" />
      </div>
      <div className="formField">
          <label htmlFor="">Password</label>
          <input onChange={e => password.current = e.target.value} type="password" className="form-control form-control-sm field" />
      </div>
      <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
      <ActionButton text="LogIn" color="primary" onClick={() => submitLogin(userEmail, password)} />
      </div>
    </form>
  )
}

export default Login