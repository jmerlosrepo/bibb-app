import { MAIN_PATH } from "./constants"
export const endPoints = {
    userRegister: () => `${MAIN_PATH}/register-user`,
    userProfile: () => `${MAIN_PATH}/profile`,
    userLogIn: () => `${MAIN_PATH}/login`,
    userAboutMe: () => `${MAIN_PATH}/about-me`,
    userAddress: () => `${MAIN_PATH}/address`,
    userCertificates: () => `${MAIN_PATH}/certificates`,
    userEducation: () => `${MAIN_PATH}/education`,
    userLanguages: () => `${MAIN_PATH}/languages`,
    userMajorSkills: () => `${MAIN_PATH}/major-skills`,
    userPersonalInfo: () => `${MAIN_PATH}/personal-info`,
    userProfessionalInfo: () => `${MAIN_PATH}/professional-info`,
    userSocialMedia: () => `${MAIN_PATH}/social-media`,
    userStrengths: () => `${MAIN_PATH}/strengths`,
}