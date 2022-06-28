import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ActionButton from '../ActionButton/ActionButton'
import { majorSkills } from '../../models/majorSkillsModel'
import { majorSkillKnowledge } from '../../models/majorSkillKnowledgeModel'
import { addMajorSkillsKnowledgeAction, deleteMajorSkillsKnowledgeAction, editMajorSkillsAction, saveTempMajorSkillsAction, deleteMajorSkillsAction } from '../../redux/actions/majorSkillsActions'

const MajorSkillForm = ({ data }) => {

  const { majorSkillId, title, knowledge, tempSaved } = data

  const [maSkillId, setMaSkillId] = useState(majorSkillId)
  const [maSkillTitle, setMaSkillTitle] = useState(title)
  const [maSkillKnowledgeArr, setMaSkillKnowledgeArr] = useState(knowledge)
  const [maSkillSaved, setMaSkillSaved] = useState(tempSaved)
  const [maSkillKnowledgeText, setMaSkillKnowledgeText] = useState('')

  const dispatch = useDispatch()

  const handleMajorSkillOnSave = () => {}
  const handleMajorSkillOnCancel = () => {}
  const handleMajorSkillOnEdit = () => {}
  const handleMajorSkillOnDelete = () => {}
  const handleMajorSkillOnAddKnowledge = () => {}
  const handleMajorSkillOnDeleteKnowledge = (e, itemId) => {}

  return (
    <div key={maSkillId} className="majorSkillForm">
        <div className="row">
            <div className="col mb-3 formField">
                <label className="form-label" htmlFor="">Major Skill Title</label>
                <input value={maSkillTitle} onChange={e => setMaSkillTitle(e.target.value)} type="text" className="form-control form-control-sm field" />
            </div>
        </div>
        <div className="row">
            <label className="form-label" htmlFor="">Knowledge for this Skill</label>
            <div className="input-group mb-3">
                <input onChange={e => setMaSkillKnowledgeText(e.target.value)} type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={handleMajorSkillOnAddKnowledge} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
        <div className="row">
          <div className="tag-container">
            { maSkillKnowledgeArr.map( knowledgeItem => <span className="tag-item">{ knowledgeItem.name } <a onClick={e => handleMajorSkillOnDeleteKnowledge(e, knowledgeItem.majorSkillId)} href="/#">X</a></span> ) }
          </div>
        </div>
        {!maSkillSaved 
        ? (
          <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Cancel" color="danger" onClick={handleMajorSkillOnCancel} />
            <ActionButton text="Save" color="primary" onClick={handleMajorSkillOnSave} />
          </div>
        ) 
        : (
          <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
            <ActionButton text="Edit" color="primary" onClick={handleMajorSkillOnEdit} />
            <ActionButton text="Delete" color="danger" onClick={handleMajorSkillOnDelete} />
          </div>
        )}
        
    </div>
  )
}

export default MajorSkillForm