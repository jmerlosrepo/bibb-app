import { useState, useEffect } from 'react'
import { userSession as userSessionModel } from '../models/userSessionModel'

export const useUserSession = (sessionId = null) => {
    const [ userSession, setUserSession ] = useState(userSessionModel)

    const setUserSessionValue = (userSessionData) => {
        localStorage.setItem('USR_SESS', userSessionData.sessionId)
        Object.keys(userSessionData).forEach(sessionItem => {
            if(sessionItem !== 'sessionId') localStorage.setItem(sessionItem, userSessionData[sessionItem]) 
        })
        setUserSession(prev => prev = {...userSessionData})
    }

    useEffect(() => {
        let sessId = localStorage.getItem('USR_SESS')

        if(sessId === sessionId) {
            Object.keys(userSessionModel).forEach( sessionItem => {
                userSessionModel[sessionItem] = localStorage.getItem(sessionItem)
            } )
            setUserSession(prev => prev = {...userSessionModel})
        }
    }, [sessionId])

    return [ userSession, setUserSessionValue ]
}