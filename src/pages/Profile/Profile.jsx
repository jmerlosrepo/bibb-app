import React from 'react'
import AddressForm from '../../components/AddressForm/AddressForm'
import AboutMeForm from '../../components/AboutMeForm/AboutMeForm'
import CertificatesSection from '../../components/CertificatesSection/CertificatesSection'
import FieldSet from '../../components/FieldSet/FieldSet'
import EducationSection from '../../components/EducationSection/EducationSection'
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection'
import LanguagesSection from '../../components/LanguagesSection/LanguagesSection'
import MajorSkillSection from '../../components/MajorSkillSection/MajorSkillSection'
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm'
import SocialMediaSection from '../../components/SocialMediaSection/SocialMediaSection'
import StrengthsSection from '../../components/StrengthsSection/StrengthsSection'
import SubmitCancelProfileControls from '../../components/SubmitCancelProfileControls/SubmitCancelProfileControls'
const Profile = () => {
    
    return (
        <div className="container mainContainer">
        <h1>Profile</h1>
        <form>
            <SubmitCancelProfileControls />
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
                <MajorSkillSection />
            </FieldSet>
            <FieldSet title="Languages:">
                <LanguagesSection />
            </FieldSet>
            <FieldSet title="Certificates">
                <CertificatesSection />
            </FieldSet>
            <FieldSet title="Social Media">
                <SocialMediaSection />
            </FieldSet>
            <SubmitCancelProfileControls />
        </form>
    </div>
  )
}

export default Profile