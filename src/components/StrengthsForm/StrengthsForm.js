import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { saveTempStrengthAction, deleteStrengthAction, editSterngthAction } from '../../redux/actions/strengthActions'
import { strength } from '../../models/strengthsModel'
import { iconsList } from '../../config/selectElements'

const StrengthsForm = ({ data }) => {

  const {strengthId, icon, title, detail, tempSaved } = data

  const dispatch = useDispatch()

  const [strId, setStrengthId] = useState(strengthId)
  const [strengthSaved, setStrengthSaved] = useState(tempSaved)
  const [strengthIcon, setStrengthIcon] = useState(icon)
  const [strengthTitle, setStrengthTitle] = useState(title)
  const [strengthDetail, setStrengthDetail] = useState(detail)

  const handleStrengthsOnSave = () => {
    setStrengthSaved(!strengthSaved)
    dispatch(saveTempStrengthAction(strength))
  }
  const handleStrengthsOnCancel = () => {
    setStrengthSaved(!strengthSaved)
    dispatch(deleteStrengthAction(strengthId))
  }

  const handleStrengthsOnEdit = () => {
    dispatch(editSterngthAction(strengthId))
    setStrengthSaved(!strengthSaved)
  }
  const handleStrengthsOnDelete = () => {
    dispatch(deleteStrengthAction(strengthId))
  }

  return (
    <div key={strId} className="strengthsForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="strengthTitleInput">Strength Title</label>
                { !strengthSaved 
                ? (<input name="strengthTitleInput" onChange={ e => setStrengthTitle(e.target.value) } type="text" className="form-control form-control-sm field" value={strengthTitle} />) 
                : (<div>{strengthTitle}</div>)}
            </div>
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="strengthIconInput">Strength Icon</label>
                {!strengthSaved ? (
                <select name="strengthIconInput" value={strengthIcon} onChange={e => setStrengthIcon(e.target.value)} className="form-select form-select-sm" aria-label="Icon Select">
                    <option defaultValue>Select Strength Icon</option>
                    { iconsList.map( iconListElement => <option value={ iconListElement.iconClassName }>{ iconListElement.name } <i className={`fa ${iconListElement.iconClassName}`} aria-hidden="true"></i></option> ) }
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
        {!strengthSaved ? (
          <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Cancel" color="danger" onClick={ handleStrengthsOnCancel } />
            <ActionButton text="Save" color="primary" onClick={ handleStrengthsOnSave } />
          </div>
        ) : (
          <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Edit" color="primary" onClick={ handleStrengthsOnEdit } />
            <ActionButton text="Delete" color="danger" onClick={ handleStrengthsOnDelete } />
          </div>
        )}
        
    </div>
  )
}

export default StrengthsForm