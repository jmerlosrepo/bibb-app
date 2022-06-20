import React from 'react'

const AddressForm = () => {
  return (
    <div className="addressForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Address Line 1</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Address Line 2</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Country</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
          </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">State</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
          </div>
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">City</label>
                <input type="text" className="form-control form-control-sm field" />
          </div>
          <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Zip Code</label>
                <input type="text" className="form-control form-control-sm field" />
          </div>
        </div>
    </div>
  )
}

export default AddressForm