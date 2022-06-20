import { useState, useEffect } from 'react'
import { navigationLinks, onlineNavigationLinks } from "../config/navigationConfig"

export const useNavigationData = (isOnline = false) => {

    const [online, setOnline] = useState(isOnline)
    const [navLinks, setNavLinks] = useState(navigationLinks);

    const setNavLinksData = (userOnline) => setOnline(userOnline)

    useEffect(() => {
        if(online) setNavLinks(prev => [...prev, ...onlineNavigationLinks])
        if(!online) onlineNavigationLinks.forEach(onlineNavigationLink => setNavLinks(navLinks.filter( navLink =>  onlineNavigationLink.name !== navLink.name)))
    }, [online])

    return [navLinks, setNavLinksData]
}