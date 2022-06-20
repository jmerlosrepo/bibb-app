import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react'

const Modal = ({ modalTitle, children, visible, size, onClickClose }) => {

    const modalSizes = {
        big: 'bibb-modal-bg',
        medium: 'bibb-modal-md',
        small: 'bibb-modal-sm'
    }

  return (
        <div className={`bibb-modal place-top-right ${visible ? 'show-modal' : 'hide-modal'} ${modalSizes[size]}`}>
            <div className="modal-header">
                <h2>{ modalTitle }</h2>
                <button className="modal-close-button" href="!#" onClick={onClickClose}>
                    <MaterialIcon icon="close" />
                </button>
            </div>
            <div className="modal-body">
                { children }
            </div>
        </div>
  )
}

export default Modal