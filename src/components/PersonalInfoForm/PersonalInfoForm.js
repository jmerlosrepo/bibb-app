import React from 'react'

const PersonalInfoForm = () => {
  return (
    <div className="personalInfoForm">
        <div className="row">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">Upload Profile Image</label>
              <input type="file" className="form-control" id="inputGroupFile01"/>
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">First Name</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Last Name</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Username</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Age</label>
                <input type="text" className="form-control form-control-sm field" />
          </div>
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Gender</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
          </div>
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Phone</label>
                <input type="phone" className="form-control form-control-sm field" />
          </div>
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Email</label>
                <input type="phone" className="form-control form-control-sm field" />
          </div>
        </div>
    </div>
  )
}

export default PersonalInfoForm