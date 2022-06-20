import React from 'react'
import NavigationLink from '../NavigationLink/NavigationLink'
import ActionButton from '../ActionButton/ActionButton'

const Navigation = ({ links, onClickRegister, onClickLogIn, isSessionOn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { links.map( linkElement => <NavigationLink key={linkElement.name} path={linkElement.path} text={linkElement.displayName} /> ) }
          </ul>
          <form className="d-flex">
            { !isSessionOn ? (
            <>
              <ActionButton text="Register" color="primary" onClick={onClickRegister} />
              <ActionButton text="LogIn" color="primary" onClick={onClickLogIn} />
            </>)
            : (<ActionButton text="LogOut" color="primary" onClick={onClickLogIn} />)}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navigation