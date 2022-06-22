import React from 'react'
import AddressForm from '../../components/AddressForm/AddressForm'
import AboutMeForm from '../../components/AboutMeForm/AboutMeForm'
import ActionButton from '../../components/ActionButton/ActionButton'
import CertificatesSection from '../../components/CertificatesSection/CertificatesSection'
import FieldSet from '../../components/FieldSet/FieldSet'
import EducationSection from '../../components/EducationSection/EducationSection'
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection'
import LanguagesForm from '../../components/LanguagesForm/LanguagesForm'
import MajorSkillForm from '../../components/MajorSkillForm/MajorSkillForm'
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm'
import SocialMediaForm from '../../components/SocialMediaForm/SocialMediaForm'
import StrengthsSection from '../../components/StrengthsSection/StrengthsSection'

const Profile = () => {
    const handleMajorSkillOnAddMajorSkill = () => {}
    const handleMajorSkillOnSave = () => {}
    const handleMajorSkillOnCancel = () => {}
    const handleLanguagesOnAddLanguage = () => {}
    const handleLanguageOnSave = () => {}
    const handleLanguageOnCancel = () => {}
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
                <StrengthsSection />
            </FieldSet>
            <FieldSet title="Education Info:">
                <EducationSection />
            </FieldSet>
            <FieldSet title="Professional Info:">
                <ExperienceSection />
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
                <CertificatesSection />
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