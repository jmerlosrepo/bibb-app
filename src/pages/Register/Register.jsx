import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerNewUserAction } from '../../redux/actions/userActions'
import InAppMessage from '../../components/InAppMessage/InAppMessage'
import ActionButton from '../../components/ActionButton/ActionButton'
import { registerUserModel } from '../../models/registerUserModel'

const Register = () => {
  const register = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    const { firstName, lastName, username, phone, email, password, confirmPassword } = e.target

    registerUserModel.firstName = firstName.value
    registerUserModel.lastName = lastName.value
    registerUserModel.username = username.value
    registerUserModel.phone = phone.value
    registerUserModel.email = email.value
    registerUserModel.password = password.value
    registerUserModel.confirmPassword = confirmPassword.value

    dispatch(registerNewUserAction(registerUserModel))
  }

  return (
    <div className="container mainContainer">
      <h1>
        Register
      </h1>
      <InAppMessage message='Message shown' color="danger" />
      <form onSubmit={(e) => handleSubmitRegister(e)}>
        <div className="mb-3 formField">
          <label className="form-label" htmlFor="">First Name</label>
          <input type="text" name="firstName" className="form-control form-control-sm field" />
        </div>
        <div className="mb-3 formField">
          <label className="form-label" htmlFor="">Last Name</label>
          <input type="text" name="lastName" className="form-control form-control-sm field" />
        </div>
        <div className="formField">
          <label htmlFor="">Username</label>
          <input type="text" name="username" className="form-control form-control-sm field" />
        </div>
        <div className="formField">
          <label className="form-label" htmlFor="">Email</label>
          <input type="email" name="email" className="form-control form-control-sm field" />
        </div>
        <div className="formField">
          <label className="form-label" htmlFor="">Phone Number</label>
          <input type="phone" name="phone" className="form-control form-control-sm field" />
        </div>
        <div className="formField">
          <label className="form-label" htmlFor="">Password</label>
          <input type="password" name="password" className="form-control form-control-sm field" />
        </div>
        <div className="formField">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirmPassword" className="form-control form-control-sm field" />
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Submit" color="primary" action={()=>{}} />
        </div>
      </form>
    </div>
  )
}

export default Register