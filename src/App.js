import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Errors from './pages/Errors/Errors'
import Footer from './components/Footer/Footer'
import InternetPages from './pages/InternetPages/InternetPages'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import Login from './components/Login/Login'
import LiveResume from './pages/LiveResume/LiveResume'
import Modal from './components/Modal/Modal'
import Navigation from './components/Navigation/Navigation'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import { useNavigationData } from './hooks/useNavigationData'
import './App.scss'

const App = () => {

  const navigate = useNavigate();
  const [ loginResponse, setLoginResponse ] = useState({})
  const [ hideShowModal, setHideShowModal ] = useState(false)
  const [navLinks, setNavLinksData] = useNavigationData(false)
  const isOnline = useRef(false)

  useEffect(() => {
    if(loginResponse.status === 'valid') {
      isOnline.current = true;
      setNavLinksData(isOnline.current);
      navigate('home')
    }
  }, [loginResponse])

  const handleShowHideModal = () => {
    setHideShowModal(!hideShowModal)
  }

  const handleClickRegister = () => {
    navigate('/register')
  }

  const handleSubmitLogin = ( email, password ) => {
    if(email.current === '') {
      setLoginResponse(prev => ({...prev,  status: 'missingEmail' }))
      return
    }

    if(password.current === ''){
      setLoginResponse(prev => ({...prev,  status: 'missignPassword' }))
      return
    }

    if(password.current !== '' && email.current !== ''){
      setLoginResponse(prev => ({...prev,  status: 'valid' }))
      return
    }

    setLoginResponse(prev => ({...prev,  status: 'invalid' }))
  }

  return (
    <>
      <Navigation links={navLinks} onClickRegister={handleClickRegister} onClickLogIn={handleShowHideModal} />
      <Modal modalTitle="LogIn" visible={hideShowModal} size="small" onClickClose={handleShowHideModal}>
        <Login submitLogin={handleSubmitLogin} logInResponse={loginResponse} />
      </Modal>
      <Routes>
        <Route path='/home'  element={<Home/>}/>
        <Route exact path='/'  element={<Landing />}/>
        <Route path='/landing'  element={<Landing />}/>
        <Route path='/page/:id'  element={<InternetPages />}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/live-resume'  element={<LiveResume/>}/>
        <Route path='/profile'  element={<Profile/>}/>
        <Route path='*'  element={<Errors/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
