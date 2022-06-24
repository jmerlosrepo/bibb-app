import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { getStrengthAction, saveStrengthAction, deleteStrengthAction } from '../../redux/actions/strengthActions'

const StrengthsForm = ({ data, onSave, onCancel }) => {

  const {id, icon, saved, title, detail } = data

  const [strengthId, setStrengthId] = useState(id)
  const [strengthSaved, setStrengthSaved] = useState(saved)
  const [strengthIcon, setStrengthIcon] = useState(icon)
  const [strengthTitle, setStrengthTitle] = useState("HOLA")
  const [strengthDetail, setStrengthDetail] = useState(detail)

  const handleStrengthsOnSave = () => {
    setStrengthSaved(!strengthSaved)
  }
  const handleStrengthsOnCancel = () => {
    setStrengthSaved(!strengthSaved)
  }

  return (
    <div className="strengthsForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Strength Title</label>
                { !strengthSaved 
                ? (<input onChange={ e => setStrengthTitle(e.target.value) } type="text" className="form-control form-control-sm field" value={strengthTitle} />) 
                : (<div>{strengthTitle}</div>)}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Strength Icon</label>
                {!strengthSaved ? (
                <select value={strengthIcon} onChange={e => setStrengthIcon(e.target.value)} className="form-select form-select-sm" aria-label="Default select example">
                    <option defaultValue>Select Strength Icon</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                ) : <div>{strengthIcon}</div>}
            </div>
        </div>
        <div className="row">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Strength Detail</label>
            {!strengthSaved 
            ? (<textarea onChange={e => setStrengthDetail(e.target.value)} value={strengthDetail} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>)
          :  <div>{strengthDetail}</div> }
        </div>
        <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
          <ActionButton text="Cancel" color="danger" onClick={ handleStrengthsOnCancel } />
          <ActionButton text="Save" color="primary" onClick={ handleStrengthsOnSave } />
        </div>
    </div>
  )
}

export default StrengthsForm