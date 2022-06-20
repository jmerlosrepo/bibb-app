import React from 'react'

const AboutMeForm = () => {
  return (
    <div className="aboutMeForm">
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Professional Background Text</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Personal Comment Text</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}

export default AboutMeForm