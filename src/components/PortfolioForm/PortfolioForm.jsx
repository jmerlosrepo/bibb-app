import React from 'react'
import ActionButton from '../ActionButton/ActionButton'

const PortfolioForm = () => {

    const handlePortfolioOnCancel =  () => {}
    const handlePortfolioOnSave =  () => {}

  return (
    <div className="portfolioForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Portfolio Title</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Project Url</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Category</label>
                <input type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Start Year</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">End Year</label>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <h5>Project Technology</h5>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Tech Skills Used</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                </div>
                <div className="project-technology-container"></div>
            </div>
        </div>
        <h5>Project Social Media</h5>
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Social Media Url</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                </div>
            </div>
            <div className="project-social-media-container"></div>
        </div>
        <h5>Project Media</h5>
        <div className="row">
        <div className="col mb-3 formField">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">Upload Project Image</label>
              <input type="file" className="form-control" id="inputGroupFile01"/>
            </div>
        </div>
        <div className="project-media-container"></div>
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Cancel" color="danger" onClick={ handlePortfolioOnCancel } />
          <ActionButton text="Save" color="primary" onClick={ handlePortfolioOnSave } />
        </div>
    </div>
  )
}

export default PortfolioForm