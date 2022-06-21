import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStrengthAction, getStrengthAction, saveStrengthAction, deleteStrengthAction } from '../../redux/actions/strengthActions'
import { addEducationAction } from '../../redux/actions/educationActions'
import AddressForm from '../../components/AddressForm/AddressForm'
import AboutMeForm from '../../components/AboutMeForm/AboutMeForm'
import ActionButton from '../../components/ActionButton/ActionButton'
import CertificatesForm from '../../components/CertificatesForm/CertificatesForm'
import FieldSet from '../../components/FieldSet/FieldSet'
import EducationForm from '../../components/EducationForm/EducationForm'
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import LanguagesForm from '../../components/LanguagesForm/LanguagesForm'
import MajorSkillForm from '../../components/MajorSkillForm/MajorSkillForm'
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm'
import SocialMediaForm from '../../components/SocialMediaForm/SocialMediaForm'
import StrengthsForm from '../../components/StrengthsForm/StrengthsForm'

const Profile = () => {

    const strengths = useSelector(state => state.strengthReducer)
    const education = useSelector(state => state.educationReducer)
    const [strengthSaved, setStrengthSaved] = useState(false)
    const dispatch = useDispatch()

    console.log('EDUCATION', education)

    const handleEducationOnAddEducation = () => {
        dispatch(addEducationAction())
    }
    const handleStrengthsOnAddStrength = () => {
        dispatch(addStrengthAction())
    }
    const handleStrengthsOnSave = () => {
        setStrengthSaved(!strengthSaved)
    }
    const handleStrengthsOnCancel = () => {}
    const handleExperienceOnAddExperience = () => {}
    const handleExperienceOnSave = () => {}
    const handleExperienceOnCancel = () => {}
    const handleMajorSkillOnAddMajorSkill = () => {}
    const handleMajorSkillOnSave = () => {}
    const handleMajorSkillOnCancel = () => {}
    const handleLanguagesOnAddLanguage = () => {}
    const handleLanguageOnSave = () => {}
    const handleLanguageOnCancel = () => {}
    const handleCertificatesOnAddCertificate = () => {}
    const handleCertificatesOnSave = () => {}
    const handleCertificatesOnCancel = () => {}
    const handleSocialMediaOnAddSocialMedia = () => {}
    const handleSocialMediaOnSave = () => {}
    const handleSocialMediaOnCancel = () => {}

  return (
    <div className="container mainContainer">
        <h1>Profile</h1>
        <form>
            <FieldSet title="Personal Info:">
                <PersonalInfoForm />
            </FieldSet>
            <FieldSet title="Address:">
                <AddressForm />
            </FieldSet>
            <FieldSet title="About Me:">
                <AboutMeForm />
            </FieldSet>
            <FieldSet title="My Strengths:">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton disabled={!strengthSaved} text="Add Strength" color="success" onClick={handleStrengthsOnAddStrength} />
                </div>
                { strengths.map( 
                        strength => (
                            <StrengthsForm data={strength} onSave={handleStrengthsOnSave} onCancel={handleStrengthsOnCancel} />
                        ) 
                    ) 
                }
            </FieldSet>
            <FieldSet title="Education Info:">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Education" color="success" onClick={handleEducationOnAddEducation} />
                </div>
                { education && education.map( educationItem =>  <EducationForm data={educationItem} />) }
                
            </FieldSet>
            <FieldSet title="Professional Info:">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Experience" color="success" onClick={handleExperienceOnAddExperience} />
                </div>
                <ExperienceForm onSave={handleExperienceOnSave} onCancel={handleExperienceOnCancel} />
            </FieldSet>
            <FieldSet title="Major Skills:">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Major Skill" color="success" onClick={handleMajorSkillOnAddMajorSkill} />
                </div>
                <MajorSkillForm onSave={handleMajorSkillOnSave} onCancel={handleMajorSkillOnCancel} />
            </FieldSet>
            <FieldSet title="Languages:">
                <div className="form-check">
                    <input onChange={() => {}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Show Languages as Badges
                    </label>
                </div>
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Language" color="success" onClick={handleLanguagesOnAddLanguage} />
                </div>
                <LanguagesForm onSave={handleLanguageOnSave} onCancel={handleLanguageOnCancel} />
            </FieldSet>
            <FieldSet title="Certificates">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Certificate" color="success" onClick={handleCertificatesOnAddCertificate} />
                </div>
                <CertificatesForm onSave={handleCertificatesOnSave} onCancel={handleCertificatesOnCancel} />
            </FieldSet>
            <FieldSet title="Social Media">
                <div className="button-spacing d-grid gap-2 d-md-flex justify-content-md-end">
                    <ActionButton text="Add Social Media" color="success" onClick={handleSocialMediaOnAddSocialMedia} />
                </div>
                <SocialMediaForm onSave={handleSocialMediaOnSave} onCancel={handleSocialMediaOnCancel} />
            </FieldSet>
        </form>
    </div>
  )
}

export default Profile